from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from db.session import get_db
from models.document_model import Document
from schemas.document_schema import DocumentCreate
from crud.document_crud import create_document
from core.security import get_user_id_from_token
from tasks import encrypt_file, decrypt_file
from celery.result import AsyncResult
import os

router = APIRouter()

@router.post("/encrypt_file/")
async def encrypt_file_route(file_path: str, shift: int, token: str, db: Session = Depends(get_db)):
    user_id = get_user_id_from_token(token)
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="File not found")
    
    if token:
        task = encrypt_file.delay(file_path, shift)
        document = DocumentCreate(
            filename=os.path.basename(file_path),
            status="encrypting",
            user_id=user_id,
            task_id=task.id
        )
        create_document(db, document)
        return {"message": "File encryption started", "task_id": task.id}
    else:
        task = encrypt_file.delay(file_path, shift)
        return {"message": "File encryption started", "task_id": task.id}


@router.post("/decrypt_file/")
async def decrypt_file_route(file_path: str, shift: int, token: str, db: Session = Depends(get_db)):
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="File not found")
    
    if token:
        task = decrypt_file.delay(file_path, shift)
        document = DocumentCreate(
            filename=os.path.basename(file_path),
            status="decrypting",
            user_id=token.id
        )
        create_document(db, document)
        return {"message": "File decryption started", "task_id": task.id}
    else:
        task = decrypt_file.delay(file_path, shift)
        return {"message": "File decryption started", "task_id": task.id}


@router.get("/task_status/{task_id}")
async def task_status(task_id: str, db: Session = Depends(get_db)):
    task = AsyncResult(task_id)
    if task.state == "PENDING":
        return {"status": "pending", "details": "Task is being processed"}
    elif task.state == "SUCCESS":
        file_path = task.result
        file_name = os.path.basename(file_path)

        document = db.query(Document).filter(Document.task_id == task_id).first()
        if document:
            document.status = "completed"
            db.commit()

        return {"status": "success", "details": "Task completed", "file_name": file_name}
    elif task.state == "FAILURE":
        return {"status": "failure", "details": str(task.info)}
    else:
        return {"status": task.state}