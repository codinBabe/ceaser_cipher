from fastapi import APIRouter, File, UploadFile, HTTPException
from fastapi.responses import FileResponse
import os

router = APIRouter()

TEMP_DIR = "temp"

if not os.path.exists(TEMP_DIR):
    os.makedirs(TEMP_DIR)

@router.post("/upload_file/")
async def upload_file(file: UploadFile = File(...)):
    file_path = os.path.join(TEMP_DIR, file.filename)
    with open(file_path, "wb") as buffer:
        buffer.write(file.file.read())
    return {"message": "File uploaded successfully", "file_path": file_path}


@router.get("/download_file/{file_name}")
async def download_file(file_name: str):
    file_path = os.path.join(TEMP_DIR, file_name)
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="File not found")
    return FileResponse(file_path)
