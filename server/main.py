from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import init_db
from routers import interviews, users

app = FastAPI()


@app.on_event("startup")
async def startup():
    await init_db()

app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(interviews.router, prefix="/interviews", tags=["Interviews"])

@app.get("/")
def root():
    return {"msg": "Interview Tracker Backend is running 🚀"}
