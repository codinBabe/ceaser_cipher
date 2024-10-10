from sqlalchemy.orm import Session
from fastapi import HTTPException
from core import security
from models import user_model
from schemas import user_schema

def create_user(db: Session, user: user_schema.UserCreate):
    hashed_password = security.get_password_hash(user.password)
    db_user = user_model.User(username=user.username, email=user.email, password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def authenticate_user(db: Session, email: str, password: str):
    user = db.query(user_model.User).filter(user_model.User.email == email).first()
    if not user or not security.verify_password(password, user.password):
        return False
    return user

def get_user(db: Session, user_id: int):
    return db.query(user_model.User).filter(user_model.User.id == user_id).first()


def get_current_user(db: Session, token: str):
    user_id = security.get_user_id_from_token(token)
    return get_user(db, user_id)