from fastapi import APIRouter
from services.process_service import encrypt_uploaded_file, decrypt_uploaded_file, get_task_status

router = APIRouter()

@router.post("/encrypt")
def encrypt_file_route(file_path: str, shift: int, token: str):
    return encrypt_uploaded_file(file_path, shift, token)

@router.post("/decrypt")
def decrypt_file_route(file_path: str, shift: int, token: str):
    return decrypt_uploaded_file(file_path, shift, token)

@router.get("/status/{task_id}")
def get_task_status_route(task_id: str):
    return get_task_status(task_id)