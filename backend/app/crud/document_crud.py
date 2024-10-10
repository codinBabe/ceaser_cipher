from sqlalchemy.orm import Session
from models import document_model
from schemas import document_schema

def create_document(db: Session, document: document_schema.DocumentCreate):
    db_document = document_model.Document(title=document.title, content=document.content, owner_id=document.owner_id)
    db.add(db_document)
    db.commit()
    db.refresh(db_document)
    return db_document

def get_document(db: Session, document_id: int):
    return db.query(document_model.Document).filter(document_model.Document.id == document_id).first()

def get_documents(db: Session, skip: int = 0, limit: int = 10):
    return db.query(document_model.Document).offset(skip).limit(limit).all()

def get_document_by_user_id(db: Session, user_id: int):
    return db.query(document_model.Document).filter(document_model.Document.owner_id == user_id).all()

def delete_document(db: Session, document_id: int):
    db.query(document_model.Document).filter(document_model.Document.id == document_id).delete()
    db.commit()
    return