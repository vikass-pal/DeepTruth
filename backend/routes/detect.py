from fastapi import APIRouter, UploadFile, File, HTTPException
from utils.processing import analyze_media

router = APIRouter()
@router.post("/image")
async def detect_image(file: UploadFile = File(...)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Invalid file type. Please upload an image.")
    result = await analyze_media(file, "image")
    return result

@router.post("/video")
async def detect_video(file: UploadFile = File(...)):
    if not file.content_type.startswith("video/"):
        raise HTTPException(status_code=400, detail="Invalid file type. Please upload a video.")
    result = await analyze_media(file, "video")
    return result

@router.post("/audio")
async def detect_audio(file: UploadFile = File(...)):
    if not file.content_type.startswith("audio/"):
        # Allow common audio types, mimetypes can vary
        pass
        
    result = await analyze_media(file, "audio")
    return result
