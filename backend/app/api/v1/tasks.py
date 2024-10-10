#handle file encryption and decryption
from celery import shared_task
from core.ceaser_cipher import caesar_cipher, ReaderFactory


@shared_task
def encrypt_file(file_path: str, shift: int):
    reader = ReaderFactory.get_reader(file_path)
    data = reader.read()
    encrypted_data = caesar_cipher(data, shift, decrypt=False)
    reader.write(encrypted_data)
    return

@shared_task
def decrypt_file(file_path: str, shift: int):
    reader = ReaderFactory.get_reader(file_path)
    data = reader.read()
    decrypted_data = caesar_cipher(data, shift, decrypt=True)
    reader.write(decrypted_data)
    return
