from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends
from services.process_service import encrypt_uploaded_file, decrypt_uploaded_file, get_task_status
from db.session import get_db

router = APIRouter()

@router.post("/encrypt")
def encrypt_file_route(file_path: str, shift: int, token: str, db: Session = Depends(get_db)):
    return encrypt_uploaded_file(file_path, shift, token, db)

@router.post("/decrypt")
def decrypt_file_route(file_path: str, shift: int, token: str, db: Session = Depends(get_db)):
    return decrypt_uploaded_file(file_path, shift, token, db)

@router.get("/status/{task_id}")
def get_task_status_route(task_id: str):
    return get_task_status(task_id)