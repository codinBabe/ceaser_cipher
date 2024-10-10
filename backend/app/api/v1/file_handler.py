from fastapi import APIRouter, File, Depends, UploadFile, HTTPException
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session
from crud import document_crud
from schemas import document_schema
from db.session import get_db
from tasks import encrypt_file, decrypt_file

router = APIRouter()

@router.post("/upload/")
async def upload_file(type: str, shift: int, file: UploadFile = File(...), db: Session = Depends(get_db)):
    if not file.filename.endswith(".pdf", ".txt", ".csv"):
        raise HTTPException(status_code=400, detail="Unsupported file type")
    if type == "encrypt":
        encrypt_file.delay(file.filename, shift)
    elif type == "decrypt":
        decrypt_file.delay(file.filename, shift)
    document = document_crud.create_document(db, document_schema.DocumentCreate(title=file.filename, content=file.file.read()))
    return document

@router.get("/download/{document_id}")
async def download_file(document_id: int, db: Session = Depends(get_db)):
    document = document_crud.get_document(db, document_id)
    if not document:
        raise HTTPException(status_code=404, detail="Document not found")
    return FileResponse(document.title, media_type="application/octet-stream", filename=document.title)

@router.get("/list/")
async def list_files(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    documents = document_crud.get_documents(db, skip, limit)
    return documents