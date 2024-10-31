from fastapi import APIRouter, File, UploadFile, HTTPException
from fastapi.responses import StreamingResponse
from io import BytesIO
from services.file_service import upload_file, download_file, delete_file

router = APIRouter()

@router.post("/upload")
async def upload_file_route(file: UploadFile = File(...)):
    """Route to upload a file to cloud storage."""
    return upload_file(file)


@router.get("/download")
async def download_route(file_url: str):
    """Route to download a file from cloud storage using its URL."""
    try:
        result = download_file(file_url)
        file_content = result["file"]
        media_type = result["media_type"]
        filename = file_url.split('/')[-1]

        return StreamingResponse(BytesIO(file_content), media_type=media_type, headers={
            "Content-Disposition": f"attachment; filename={filename}"
        })
    except HTTPException as e:
        raise e
    except Exception:
        raise HTTPException(status_code=500, detail="An error occurred while downloading the file")


@router.delete("/delete/{file_name}")
async def delete_file_route(file_name: str):
    """Route to delete a file in cloud storage by its name."""
    return delete_file(file_name)
