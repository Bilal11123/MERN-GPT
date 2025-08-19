
# MERN-GPT

A **MERN** stack (MongoDB · Express · React · Node.js) project integrating with OpenAI’s GPT for AI-powered conversational capabilities.

##  Overview

##  Features

- **Backend (Node + Express + TypeScript)**:
  - Secure user authentication with JWT & HTTP-only cookies
  - Input validation using express-validator
  - MongoDB-based chat and user storage
  - OpenAI (or similar) integration for AI-powered responses (if applicable)

- **Frontend (React + Vite)**:
  - Modern chat UI built with Material-UI (MUI)
  - Responsive design
  - Chat interface with message context preserved

- **Shared Tools & Tech**:
  - Full TypeScript support throughout the stack
  - ESLint and formatting tools for consistent code quality

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
#### Make a .env file
```bash
OPEN_AI_SECRET= YOUR OPEN AI SECRET
OPEN_AI_ORGANIZATION_ID= YOUR OPEN AI ORGANIZATION ID
MONGODB_URL= YOUR MONGODB ATLAS URL
JWT_SECRET= RANDOM STRING
COOKIE_SECRET= RANDOM STRING
PORT=5000
MONGODB_PASSWORD= YOUR MONGO PASSWORD
```

### 3. make frontend
open another cmd
```bash
cd frontend
npm install
npm run dev
```
