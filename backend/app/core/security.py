import jwt
from core.config import settings
from datetime import datetime, timedelta, timezone
from jwt.exceptions import InvalidTokenError
from passlib.context import CryptContext
from passlib.context import CryptContext
from fastapi.security import OAuth2PasswordBearer

#oauth2_scheme for token
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

#pwd_context for password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt

def decode_access_token(token: str):
    try:
        decoded_token = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        return decoded_token
    except jwt.ExpiredSignatureError:
        return {"error": "Token has expired"}
    
def verify_token(token: str, user_id: int):
    try:
        decoded_token = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        if decoded_token["user_id"] == user_id:
            return True
        return False
    except jwt.ExpiredSignatureError:
        return False
    except InvalidTokenError:
        return False
