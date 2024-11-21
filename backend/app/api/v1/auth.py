from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from db.session import get_db
from services.auth_service import register_user, login_user
from schemas.user_schema import UserCreate

router = APIRouter()

@router.post("/register")
def register(user_data:UserCreate, db: Session = Depends(get_db)):
    """Route to register a new user."""
    user = register_user(db, user_data)
    if not user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return {"message": "User created successfully"}


@router.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    """Route to login a user."""
    token = login_user(db, form_data.username, form_data.password)
    if not token:
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    return {"access_token": token, "token_type": "bearer"}
