from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from models.userModel import User
import os

MONGO_URI = os.getenv("MONGO_URI", "mongodb+srv://digbijayabiswal1234_db_user:5zR15i77cAAypVGN@cluster0.c2iil7w.mongodb.net/interviewtracker?retryWrites=true&w=majority&ssl=true")

client = AsyncIOMotorClient(MONGO_URI)


async def init_db():
    try:
        await init_beanie(
            database=client.get_default_database(),
            document_models=[User]
        )
        print("✅ Database connected and Beanie initialized successfully!")
    except Exception as e:
        print(f"❌ Database connection failed: {e}")