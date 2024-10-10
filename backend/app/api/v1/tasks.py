from celery import shared_task
from core.ceaser_cipher import caesar_cipher, ReaderFactory
import os

@shared_task
def encrypt_file(file_path: str, shift: int):
    reader = ReaderFactory.get_reader(file_path)
    data = reader.read()
    encrypted_data = caesar_cipher(data, shift, decrypt=False)

    file_name, file_extension = os.path.splitext(file_path)
    encrypted_file_path = f"{file_name}_encrypted{file_extension}"

    reader.write(encrypted_data, output_file=encrypted_file_path)

    os.remove(file_path)
    
    return encrypted_file_path


@shared_task
def decrypt_file(file_path: str, shift: int):
    reader = ReaderFactory.get_reader(file_path)
    data = reader.read()
    decrypted_data = caesar_cipher(data, shift, decrypt=True)

    file_name, file_extension = os.path.splitext(file_path)
    decrypted_file_path = f"{file_name}_decrypted{file_extension}"

    reader.write(decrypted_data, output_file=decrypted_file_path)

    os.remove(file_path)

    return decrypted_file_path