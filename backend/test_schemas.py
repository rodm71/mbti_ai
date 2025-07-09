from schemas import MBTICreate, MBTIOut
from datetime import datetime

# Test de création de MBTICreate
try:
    test_create = MBTICreate(mbti_type="INTJ")
    print("✅ MBTICreate OK :", test_create)
except Exception as e:
    print("❌ Erreur MBTICreate :", e)

# Test de création de MBTIOut
try:
    test_out = MBTIOut(id=1, mbti_type="INTJ", created_at=datetime.utcnow())
    print("✅ MBTIOut OK :", test_out)
except Exception as e:
    print("❌ Erreur MBTIOut :", e)
