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

🔗 https://dag-workflow-builder-frontend-2.onrender.com
<img width="1896" height="1072" alt="Screenshot 2026-02-28 204516" src="https://github.com/user-attachments/assets/8540a131-2a18-4ca8-857b-cfc3945c83ad" />
<img width="1895" height="1068" alt="Screenshot 2026-02-28 204544" src="https://github.com/user-attachments/assets/78570d2d-a028-46f4-a4e2-015a61014df5" />


---

## 💻 Run Locally

```
npm install
npm start
```

---




