from fastapi import File, UploadFile, HTTPException
from google.cloud import storage
from app.core.config import settings

storage_client = storage.Client()
bucket = storage_client.bucket(settings.GCS_BUCKET_NAME)


def upload_file(file: UploadFile = File(...)):
    blob = bucket.blob(file.filename)
    blob.upload_from_file(file.file)
    return {"message": "File uploaded successfully", "file_path": file.filename}

def download_file(file_name: str):
    blob = bucket.blob(file_name)
    if not blob.exists():
        raise HTTPException(status_code=404, detail="File not found")
    return blob.download_as_bytes()

def delete_file(file_name: str):
    blob = bucket.blob(file_name)
    if not blob.exists():
        raise HTTPException(status_code=404, detail="File not found")
    blob.delete()
    return {"message": "File deleted successfully"}