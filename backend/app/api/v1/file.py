from fastapi import APIRouter, File, UploadFile
from services.file_service import upload_file, download_file, delete_file

router = APIRouter()

@router.post("/upload")
def upload_file_route(file: UploadFile = File(...)):
    return upload_file(file)

@router.get("/download/{file_name}")
def download_file_route(file_name: str):
    return download_file(file_name)

@router.delete("/delete/{file_name}")
def delete_file_route(file_name: str):
    return delete_file(file_name)