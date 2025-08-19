# MERN-GPT

A **MERN** stack (MongoDB · Express · React · Node.js) project integrating with OpenAI’s GPT for AI-powered conversational capabilities.

##  Overview

This project is structured into two main parts:
- **backend/**: Handles API endpoints, business logic, and interaction with OpenAI and the database.
- **frontend/**: A React-based client for chat interface and user interactions.

---

##  Features *(Customize as needed)*

- Chat interface built with React
- Node + Express backend serving the API
- MongoDB for storing chat history (optional)
- Integration with OpenAI GPT (GPT-3 or GPT-3.5-Turbo)
- Basic environment configuration for local development

---


---

##  Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Bilal11123/MERN-GPT.git
cd MERN-GPT
```
### 2. make backend
```bash
cd backend
npm install
npm run dev
```
#### MAke a .env file
OPEN_AI_SECRET= YOUR OPEN AI SECRET
OPEN_AI_ORGANIZATION_ID= YOUR OPEN AI ORGANIZATION ID
MONGODB_URL= YOUR MONGODB ATLAS URL
JWT_SECRET= RANDOM STRING
COOKIE_SECRET= RANDOM STRING
PORT=5000
MONGODB_PASSWORD= YOUR MONGO PASSWORD

### 3. make frontend
open another cmd
```bash
cd frontend
npm install
npm run dev
```
