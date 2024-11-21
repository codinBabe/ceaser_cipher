from sqlalchemy.orm import Session
from core.security import verify_password, get_password_hash, get_user_id_from_token
from models.user_model import User
from schemas.user_schema import UserCreate
from crud.user_crud import create_user, get_user


def create_user_with_password(db: Session, user: UserCreate):
    hashed_password = get_password_hash(user.password)
    user.password = hashed_password
    return create_user(db, user)


def authenticate_user(db: Session, email: str, password: str):
    user = db.query(User).filter(User.email == email).first()
    if not user or not verify_password(password, user.password):
        return False
    return user


def get_current_user(db: Session, token: str):
    user_id = get_user_id_from_token(token)
    return get_user(db, user_id)