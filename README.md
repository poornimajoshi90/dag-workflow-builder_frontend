# 🚀 DAG Workflow Builder – Frontend

A React-based web application to build and validate Directed Acyclic Graph (DAG) workflows.  
The frontend connects to a FastAPI backend to analyze pipeline structure and verify DAG validity.

---

## 🏗️ Tech Stack

- React  
- React Flow  
- JavaScript  
- FastAPI (Backend)  
- Render (Deployment)

---

## 🔄 Application Flow

```
User creates nodes & edges
        ↓
Click Submit
        ↓
POST request sent to /pipelines/parse
        ↓
Backend analyzes:
  - nodeCount
  - edgeCount
  - isDAG
        ↓
Frontend displays result in modal
```

---

## 🌐 API Endpoint

**POST** `/pipelines/parse`

Request:
```json
{
  "nodes": [...],
  "edges": [...]
}
```

Response:
```json
{
  "nodeCount": 5,
  "edgeCount": 4,
  "isDAG": true
}
```

---

## 🌐 Live Demo

🔗 https://your-frontend-live-link.onrender.com

---

## 💻 Run Locally

```
npm install
npm start
```

---




