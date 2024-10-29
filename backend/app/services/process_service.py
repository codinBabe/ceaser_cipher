from fastapi import HTTPException
from sqlalchemy.orm import Session
from celery.result import AsyncResult
from firebase_admin import storage
from schemas.document_schema import DocumentCreate
from crud.document_crud import create_document
from core.security import get_user_id_from_token
from core.config import settings
from core import firebase_init
from api.v1.tasks import encrypt_file, decrypt_file
from datetime import datetime, timezone


bucket = storage.bucket(settings.GCS_BUCKET_NAME)

def encrypt_uploaded_file(
    file_path: str,
    shift: int,
    token: str,
    db: Session
):
    user_id = get_user_id_from_token(token) if token else None
    blob = bucket.blob(file_path)
    if not blob.exists():
        raise HTTPException(status_code=404, detail="File not found")
    
    task = encrypt_file.delay(file_path, shift)
    if token and user_id:
        document = DocumentCreate(
            title=blob.name,
            original_document_url=file_path,
            processed_document_url=blob.public_url,
            user_id=user_id,
            date_created=datetime.now(timezone.utc),
            date_updated=datetime.now(timezone.utc),
            )
        create_document(db, document)
        
    return {"message": "File encryption started", "task_id": task.id}


def decrypt_uploaded_file(
    file_path: str,
    shift: int,
    token: str,
    db: Session
):
    user_id = get_user_id_from_token(token) if token else None
    blob = bucket.blob(file_path)
    if not blob.exists():
        raise HTTPException(status_code=404, detail="File not found")
    
    task = decrypt_file.delay(file_path, shift)
    if token and user_id:
        document = DocumentCreate(
            title=blob.name,
            original_document_url=file_path,
            processed_document_url=blob.public_url,
            user_id=user_id,
            date_created=datetime.now(timezone.utc),
            date_updated=datetime.now(timezone.utc),
            )
        create_document(db, document)
        
    return {"message": "File decryption started", "task_id": task.id}
    

def get_task_status(task_id: str):
    task = AsyncResult(task_id)
    if task.state == "PENDING":
        return {"status": "pending", "details": "Task is being processed"}
    elif task.state == "SUCCESS":
        file_path = task.result
        return {"status": "completed", "details": file_path}
    else:
        return {"status": "failed", "details": "Task failed"}
    