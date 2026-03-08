import asyncio
import random
from fastapi import UploadFile

async def analyze_media(file: UploadFile, media_type: str):
    """
    Simulates the deepfake detection analysis pipeline by adding
    a delay and returning mock results.
    """
    delays = {
        "image": random.uniform(1.5, 3.0),
        "audio": random.uniform(2.5, 5.0),
        "video": random.uniform(4.0, 8.0),
    }
    
    delay = delays.get(media_type, 3.0)
    await asyncio.sleep(delay)
    
    prediction = random.choices(["Real", "Deepfake"], weights=[0.4, 0.6])[0]
    confidence = round(random.uniform(0.80, 0.99), 2)
    
    file_size = getattr(file, 'size', None)
    if file_size is None:
        file.file.seek(0, 2) # seek to end
        file_size = file.file.tell()
        file.file.seek(0) # reset to beginning

    mock_data = {
        "prediction": prediction,
        "confidence": confidence,
        "filename": file.filename,
        "file_size_bytes": file_size,
        "media_type": media_type
    }
    
    return mock_data
