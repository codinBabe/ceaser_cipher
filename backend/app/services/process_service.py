from fastapi import HTTPException, Depends
from sqlalchemy.orm import Session
from celery.result import AsyncResult
from google.cloud import storage
from db.session import get_db
from schemas.document_schema import DocumentCreate
from crud.document_crud import create_document
from core.security import get_user_id_from_token
from core.config import settings
from api.v1.tasks import encrypt_file, decrypt_file


storage_client = storage.Client()
bucket = storage_client.bucket(settings.GCS_BUCKET_NAME)

def encrypt_uploaded_file(file_path: str, shift: int, token: str, db: Session = Depends(get_db)):
    user_id = get_user_id_from_token(token)
    blob = bucket.blob(file_path)
    if not blob.exists():
        raise HTTPException(status_code=404, detail="File not found")
    
    if token:
        task = encrypt_file.delay(file_path, shift)
        document = DocumentCreate(
            title=blob.name,
            original_document_url=file_path,
            processed_document_url=blob.public_url,
            user_id=user_id,
            date_created=blob.time_created,
            date_updated=blob.updated,
        )
        create_document(db, document)
        return {"message": "File encryption started", "task_id": task.id}
    else:
        task = encrypt_file.delay(file_path, shift)
        return {"message": "File encryption started", "task_id": task.id}


def decrypt_uploaded_file(file_path: str, shift: int, token: str, db: Session = Depends(get_db)):
    user_id = get_user_id_from_token(token)
    blob = bucket.blob(file_path)
    if not blob.exists():
        raise HTTPException(status_code=404, detail="File not found")
    
    if token:
        task = decrypt_file.delay(file_path, shift)
        document = DocumentCreate(
            title=blob.name,
            original_document_url=file_path,
            processed_document_url=blob.public_url,
            user_id=user_id,
            date_created=blob.time_created,
            date_updated=blob.updated,
        )
        create_document(db, document)
        return {"message": "File decryption started", "task_id": task.id}
    else:
        task = decrypt_file.delay(file_path, shift)
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
    