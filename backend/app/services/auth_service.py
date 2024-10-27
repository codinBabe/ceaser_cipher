from core.security import create_access_token
from crud.user_crud import create_user
from services.user_service import authenticate_user


def register_user(db, user_data):
    user = create_user(db, user_data)
    if not user:
        return None
    return user


def login_user(db, username, password):
    user = authenticate_user(db, username, password)
    if not user:
        return None
    token = create_access_token(user_id=user.id, data={"user_id": user.id})
    return token
