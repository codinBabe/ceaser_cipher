import os
from dotenv import load_dotenv
from pydantic_settings import BaseSettings, SettingsConfigDict

load_dotenv()

class Setting(BaseSettings):
    """Settings class"""
    model_config = SettingsConfigDict(env_file='.env', env_file_encoding='utf-8')
    SECRET_KEY: str
    ALGORITHM: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int
    DATABASE_URL: str

settings = Setting()