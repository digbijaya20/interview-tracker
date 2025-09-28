from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from models.userModel import User
import os
from dotenv import load_dotenv


load_dotenv() 

MONGO_URI = os.getenv("MONGO_URI")

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