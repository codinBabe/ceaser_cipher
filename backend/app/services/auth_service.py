from sqlalchemy.orm import Session
from core.security import create_access_token
from services.user_service import authenticate_user, create_user_with_password


def register_user(db: Session, user_data):
    user = create_user_with_password(db, user_data)
    if not user:
        return None
    return user


def login_user(db: Session, username, password):
    user = authenticate_user(db, username, password)
    if not user:
        return None
    token = create_access_token(user_id=user.id, data={"user_id": user.id})
    return token
