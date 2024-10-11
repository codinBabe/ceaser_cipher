from fastapi import APIRouter, File, UploadFile, HTTPException
from fastapi.responses import FileResponse
import os

router = APIRouter()

TEMP_DIR = "temp"

if not os.path.exists(TEMP_DIR):
    os.makedirs(TEMP_DIR)


def get_media_type(file_path: str):
    """Get media type based on file extension"""
    if file_path.endswith(".pdf"):
        return "application/pdf"
    elif file_path.endswith(".txt"):
        return "text/plain"
    elif file_path.endswith(".csv"):
        return "text/csv"
    return "application/octet-stream"


@router.post("/upload_file")
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
    media_type = get_media_type(file_path)
    return FileResponse(file_path, media_type=media_type, filename=file_name)
