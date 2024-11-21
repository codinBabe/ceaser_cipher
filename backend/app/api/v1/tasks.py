from celery import Celery
from firebase_admin import storage
from core.config import settings
from core import firebase_init
from core.ceaser_cipher import caesar_cipher, ReaderFactory
from tempfile import TemporaryDirectory
from typing import Literal
import os


celery = Celery(
    "tasks",
    broker=settings.CELERY_BROKER_URL,
    backend=settings.CELERY_RESULT_BACKEND
)

bucket = storage.bucket(settings.GCS_BUCKET_NAME)


def process_file(file_path: str, shift: int, operation: Literal["encrypt", "decrypt"]) -> str:
    """Process file with Caesar cipher and upload to cloud storage."""

    with TemporaryDirectory() as temp_dir:
        local_file_path = os.path.join(temp_dir, os.path.basename(file_path))
        blob = bucket.blob(file_path)
        blob.download_to_filename(local_file_path)

        reader = ReaderFactory.get_reader(local_file_path)
        data = reader.read()
        processed_data = caesar_cipher(data, shift, decrypt=(operation == "decrypt"))

        output_file_name = f"{os.path.splitext(file_path)[0]}_{operation}{os.path.splitext(file_path)[1]}"
        processed_file_path = os.path.join(temp_dir, output_file_name)
        reader.write(processed_data, output_file=processed_file_path)

        destination_path = f"{operation}/{os.path.basename(processed_file_path)}"
        processed_blob = bucket.blob(destination_path)
        processed_blob.upload_from_filename(processed_file_path)

        return processed_blob.public_url


@celery.task
def encrypt_file(file_path: str, shift: int) -> str:
    """Encrypt a file and upload the result to cloud storage."""
    return process_file(file_path, shift, operation="encrypt")


@celery.task
def decrypt_file(file_path: str, shift: int) -> str:
    """Decrypt a file and upload the result to cloud storage."""
    return process_file(file_path, shift, operation="decrypt")
