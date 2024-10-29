from fastapi import File, UploadFile, HTTPException
from firebase_admin import storage
from core import firebase_init
from core.config import settings


bucket = storage.bucket(settings.GCS_BUCKET_NAME)

def upload_file(file: UploadFile = File(...)):
    blob = bucket.blob(file.filename)
    blob.upload_from_file(file.file)
    return {"message": "File uploaded successfully", "file_path": blob.public_url, "file_name": blob.name}


def download_file(file_name: str):
    blob = bucket.blob(file_name)
    if not blob.exists():
        raise HTTPException(status_code=404, detail="File not found")
    return blob.public_url


def delete_file(file_name: str):
    blob = bucket.blob(file_name)
    if not blob.exists():
        raise HTTPException(status_code=404, detail="File not found")
    blob.delete()
    return {"message": "File deleted successfully"}