from sqlalchemy.orm import Session
from models import document_model
from schemas import document_schema

def create_document(db: Session, document: document_schema.DocumentCreate):
    db_document = document_model.Document(
        filename=document.filename,
        content=document.content,
        status=document.status,
        user_id=document.user_id
    )
    db.add(db_document)
    db.commit()
    db.refresh(db_document)
    return db_document


def delete_document(db: Session, document_id: int):
    db.query(document_model.Document).filter(document_model.Document.id == document_id).delete()
    db.commit()
    return