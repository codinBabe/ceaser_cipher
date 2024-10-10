from celery import Celery
from app.core.config import settings

celery = Celery(
    "tasks",
    broker=settings.CELERY_BROKER_URL,
    backend=settings.CELERY_RESULT_BACKEND
)

celery.autodiscover_tasks(["app.api.v1.tasks"])