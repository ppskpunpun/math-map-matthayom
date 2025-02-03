# Math Map for Matthayom
## วิธีรัน server
1. สร้างไฟล์ config.js ใน folder server แล้วใส่ <db_password>
```
ATLAS_URI=mongodb+srv://ppsk:<db_password>@cluster0.vzn12.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=5050
```
2. รัน server
```
npm run dev
```