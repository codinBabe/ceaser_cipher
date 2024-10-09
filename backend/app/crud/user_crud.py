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

def get_user(db: Session, user_id: int, token: str):
    user = db.query(user_model.User).filter(user_model.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    if not security.verify_token(token, user.id):
        raise HTTPException(status_code=403, detail="Invalid token")
    return user

def get_user_by_email(db: Session, user_email: str):
    return db.query(user_model.User).filter(user_model.User.email == user_email).first()