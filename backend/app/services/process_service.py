from fastapi import HTTPException
from sqlalchemy.orm import Session
from celery.result import AsyncResult
from firebase_admin import storage
from schemas.document_schema import DocumentCreate
from models.document_model import Document
from crud.document_crud import create_document
from core.security import get_user_id_from_token
from core.config import settings
from api.v1.tasks import encrypt_file, decrypt_file
from datetime import datetime, timezone
from typing import Optional, Literal, Dict


bucket = storage.bucket(settings.GCS_BUCKET_NAME)

def get_current_utc_time() -> datetime:
    """Helper function to get the current UTC time."""
    return datetime.now(timezone.utc)


def initiate_file_task(
    file_path: str, 
    shift: int, 
    token: Optional[str], 
    db: Session, 
    operation: Literal["encrypt", "decrypt"]
) -> Dict[str, str]:

    """Initiate file encryption or decryption task, optionally creating a document record if authenticated."""
    user_id = get_user_id_from_token(token) if token else None
    blob = bucket.blob(file_path)
    
    if not blob.exists():
        raise HTTPException(status_code=404, detail="File not found")
    
    task = encrypt_file.delay(file_path, shift) if operation == "encrypt" else decrypt_file.delay(file_path, shift)

    if token and user_id:
        document = DocumentCreate(
            task_id=task.id,
            original_document_url=file_path,
            processed_document_url="",
            user_id=user_id,
            date_created=get_current_utc_time(),
            date_updated=get_current_utc_time(),
        )
        create_document(db, document)
        
    return {"message": f"File {operation}ion started", "task_id": task.id}


def encrypt_uploaded_file(
        file_path: str,
        shift: int,
        token: Optional[str],
        db: Session
    ) -> Dict[str, str]:

    """Handle file encryption initiation, creating a document record if authenticated."""
    return initiate_file_task(file_path, shift, token, db, operation="encrypt")


def decrypt_uploaded_file(
        file_path: str,
        shift: int,
        token: Optional[str],
        db: Session
    ) -> Dict[str, str]:

    """Handle file decryption initiation, creating a document record if authenticated."""
    return initiate_file_task(file_path, shift, token, db, operation="decrypt")


def update_document_with_result(task_id: str, file_path: str, db: Session) -> None:
    """Update the document record with the processed file path upon task completion, if authenticated."""
    document = db.query(Document).filter(Document.task_id == task_id).first()
    if document:
        document.processed_document_url = file_path
        document.date_updated = get_current_utc_time()
        db.commit()


def get_task_status(task_id: str, db: Session) -> Dict[str, str]:
    """Retrieve task status and update document record if task is successful."""
    task = AsyncResult(task_id)
    
    if task.state == "PENDING":
        return {"status": "pending", "details": "Task is being processed"}
    elif task.state == "SUCCESS":
        file_path = task.result
        update_document_with_result(task_id, file_path, db)
        return {"status": "success", "details": "completed", "file_path": file_path}
    else:
        return {"status": "failed", "details": str(task.info)}
