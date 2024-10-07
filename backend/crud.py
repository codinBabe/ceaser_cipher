from sqlalchemy.orm import Session
from . import models, schemas

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_by_email(db: Session, user_email: str):
    return db.query(models.User).filter(models.User.email == user_email).first()

def get_users(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.User).offset(skip).limit(limit).all()

def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(first_name=user.first_name, last_name=user.last_name, email=user.email, password=user.password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

#document crud
def get_document(db: Session, document_id: int):
    return db.query(models.Document).filter(models.Document.id == document_id).first()

def get_documents(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Document).offset(skip).limit(limit).all()

def create_document(db: Session, document: schemas.DocumentCreate):
    db_document = models.Document(title=document.title, content=document.content, owner_id=document.owner_id)
    db.add(db_document)
    db.commit()
    db.refresh(db_document)
    return db_document