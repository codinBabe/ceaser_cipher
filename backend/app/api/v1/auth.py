from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from db.session import get_db
from core.security import  create_access_token
from crud.user_crud import authenticate_user, create_user
from schemas.user_schema import UserCreate

router = APIRouter()

@router.post("/register/")
def register(user_data:UserCreate, db: Session = Depends(get_db)):
    user = create_user(db, user_data)
    if not user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return {"message": "User created successfully"}


@router.post("/login/")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    access_token = create_access_token(data={"user_id": user.id})
    return {"access_token": access_token, "token_type": "bearer"}
