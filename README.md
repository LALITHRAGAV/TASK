# 🚀 TaskFlow — Full-Stack Kanban Task Manager

TaskFlow is a MERN-based task management system with secure authentication and a drag-and-drop Kanban board to track task progress in real-time.

---
## 🧠 Features

✔ User Registration & Login using JWT  
✔ Protected Routes with Axios Interceptors  
✔ Create, Read & Update Tasks  
✔ Drag-and-Drop Status Update (TODO → IN-PROGRESS → DONE)  
✔ Persistent storage using MongoDB Atlas  
✔ Fully responsive React UI  
✔ Secure environment variable handling using `.env`  

---

## 🏗️ Tech Stack

| Frontend | Backend | Database | Auth |
|---------|---------|----------|------|
| React (Vite) | Node.js | MongoDB Atlas | JWT |
| Axios | Express.js | Mongoose | bcrypt |
| @hello-pangea/dnd | CORS |  |  |

---

## 📂 Project Structure

TASK/
├─ client/ # React Frontend
│ ├─ src/
│ │ ├─ api/ # Axios base configuration
│ │ ├─ components/ # TaskBoard
│ │ ├─ pages/ # Auth UI
│ │ ├─ App.jsx
│ │ └─ main.jsx
│
├─ server/ # Express Backend
│ ├─ routes/ # Auth & Task API routes
│ ├─ models/ # User & Task models
│ ├─ index.js # Server entry
│ └─ .env # Private environment variables
│
└─ README.md

yaml
Copy code

---

## ⚙️ Setup & Run Locally

### 🔹 Backend

```bash
cd server
npm install
npm run dev
Backend URL: http://localhost:5000/api

🔹 Frontend
bash
Copy code
cd client
npm install
npm run dev
Frontend URL: http://localhost:5173

🔐 Environment Variables (Backend)
Create server/.env:

ini
Copy code

Added detailed project description, features, tech stack, project structure, and setup instructions.
MONGO_URI=your_mongo_url_here
JWT_SECRET=taskflow_secret_key
PORT=5000
