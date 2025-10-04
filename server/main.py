from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import init_db
from routers import interviews, users

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    # allow_origins=["http://localhost:5173"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup():
    await init_db()

app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(interviews.router, prefix="/interviews", tags=["Interviews"])

@app.get("/")
def root():
    return {"msg": "Interview Tracker Backend is running 🚀"}
