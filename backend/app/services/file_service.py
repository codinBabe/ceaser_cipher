from fastapi import HTTPException, UploadFile
from firebase_admin import storage
from urllib.parse import urlparse
from core.config import settings
from uuid import uuid4


bucket = storage.bucket(settings.GCS_BUCKET_NAME)

def get_media_type(file_path: str) -> str:
    """Determine media type based on file extension."""
    media_types = {
        ".pdf": "application/pdf",
        ".txt": "text/plain",
        ".csv": "text/csv",
    }
    return media_types.get(file_path[file_path.rfind('.'):], "application/octet-stream")


def upload_file(file: UploadFile):
    """Upload a file to cloud storage, adjusting for spaces in file name."""
    sanitized_filename = file.filename.replace(" ", "_")
    
    unique_suffix = uuid4().hex[:8]
    sanitized_filename = f"{sanitized_filename.rsplit('.', 1)[0]}_{unique_suffix}.{sanitized_filename.rsplit('.', 1)[-1]}"

    blob = bucket.blob(sanitized_filename)
    blob.upload_from_file(file.file)

    return {
        "message": "File uploaded successfully",
        "file_path": blob.public_url,
        "file_name": blob.name
    }


def download_file(file_url: str):
    """Download a file from cloud storage based on its URL."""
    parsed_url = urlparse(file_url)
    file_path = parsed_url.path.lstrip("/")  

    bucket_name = bucket.name
    if file_path.startswith(f"{bucket_name}/"):
        file_path = file_path[len(bucket_name) + 1:]

    blob = bucket.blob(file_path)
    if not blob.exists():
        raise HTTPException(status_code=404, detail="File not found")

    media_type = get_media_type(file_path)
    return {
        "file": blob.download_as_string(),
        "media_type": media_type
    }


def delete_file(file_name: str):
    """Delete a file in cloud storage by its name."""
    blob = bucket.blob(file_name)
    if not blob.exists():
        raise HTTPException(status_code=404, detail="File not found")
    blob.delete()
    return {"message": "File deleted successfully"}
