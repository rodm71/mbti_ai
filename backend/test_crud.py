# Crée test_crud.py (facultatif)
from crud import create_mbti, get_mbti_for_user
from database import SessionLocal
from models import MBTIResult

db = SessionLocal()
result = create_mbti(db, user_id=1, mbti_type="INTJ")
print(result)

results = get_mbti_for_user(db, user_id=1)
print(results)
