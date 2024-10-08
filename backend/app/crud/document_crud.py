from sqlalchemy.orm import Session
from models import document_model
from schemas import document_schema

def get_document(db: Session, document_id: int):
    return db.query(document_model.Document).filter(document_model.Document.id == document_id).first()

def get_documents(db: Session, skip: int = 0, limit: int = 10):
    return db.query(document_model.Document).offset(skip).limit(limit).all()

def create_document(db: Session, document: document_schema.DocumentCreate):
    db_document = document_model.Document(title=document.title, content=document.content, owner_id=document.owner_id)
    db.add(db_document)
    db.commit()
    db.refresh(db_document)
    return db_document