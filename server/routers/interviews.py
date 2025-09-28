from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def list_interviews():
    return {"msg": "Interviews API placeholder"}