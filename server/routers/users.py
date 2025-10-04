from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, EmailStr
from models.userModel import User
from auth import hash_password, verify_password, create_access_token, get_current_user

router = APIRouter()

class SignupModel(BaseModel):
    email: EmailStr
    password: str
    full_name: str

class LoginModel(BaseModel):
    email: EmailStr
    password: str

@router.post("/signup")
async def signup(user: SignupModel):
    existing = await User.find_one(User.email == user.email)
    if existing:
        raise HTTPException(status_code=400, detail="User already exists")
    hashed_pw = hash_password(user.password)
    new_user = User(email=user.email, password=hashed_pw, full_name=user.full_name)
    await new_user.insert()
    return {"msg": "User created successfully"}

@router.post("/login")
async def login(data: LoginModel):
    user = await User.find_one(User.email == data.email)
    if not user or not verify_password(data.password, user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = create_access_token({"sub": user.email})
    return {"access_token": token, "token_type": "bearer"}

@router.get("/profile")
async def get_profile(current_user: User = Depends(get_current_user)):
    return {
        "email": current_user.email,
        "full_name": current_user.full_name,
        "id": str(current_user.id)
    }