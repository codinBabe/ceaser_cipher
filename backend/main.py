from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from schemas import UserCreate, UserRespone
from database import SessionLocal, engine
from models import Base
from crud import *


app = FastAPI()
Base.metadata.create_all(bind=engine)

#dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/users/", response_model=UserRespone)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    existing_user = get_user_by_email(db, user_email=user.email)
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return create_user(db=db, user=user)

@app.get("/users/", response_model=list[UserRespone])
def get_users(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    users = get_users(db, skip=skip, limit=limit)
    return users