# 2025Info Department — Project 01

A three‑phase TO‑DO List project: **Frontend → Backend → React**.

---

## Phase 1 — Frontend Design

### ✅ Requirements
- A title indicating this is a to‑do list (e.g., “todos”, “TO‑DOs”).
- A text input (placeholder is optional).
- Press **Enter** (or click your button) to add a new entry.
- Each entry has two states: **Undone** (default) and **Done**, with a toggle button.
- Each entry has a **Delete** button.
- Three filter buttons:
  - **All**: show all entries
  - **Active**: show only Undone entries
  - **Completed**: show only Done entries
- A **left counter** showing how many Undone items remain.
- A **Clear completed** button that removes all Done entries.
- Clean, readable CSS styling.

### 🗂️ Frontend Structure
```
frontend/
├── index.html
├── scripts/
│  └── index.js
├── styles/
│  └── main.css
└── images/
   └── (assets)
```

### 📌 Submission
- No submission required for this phase.
- Git is optional.

---

## Phase 2 — Backend Design

### ✅ Requirements
- Build an Express.js backend using **RESTful API** design.
- Connect to **MongoDB** for data persistence.
- Update the Phase‑1 frontend to talk to the backend.
- You may design your own schema as long as it works correctly.

### 🗂️ Backend Structure
```
backend/
├── models/
│  └── todo.js
├── routes/
│  └── api.js
├── index.js
├── package.json
├── .env
└── ...
```

### 📌 Submission
- No submission required for this phase.
- If using Git, add `.env` to `.gitignore`.

---

## Phase 3 — React.js Framework

### ✅ Requirements
- Rebuild the frontend using **React**.
- You can scaffold with Vite:
```
npm create vite my-app
```

### 🗂️ React Structure
```
frontend/
├── README.md
├── eslint.config.js
├── index.html
├── node_modules/
├── package.json
├── pnpm-lock.yaml
├── public/
├── src/
└── vite.config.js
```

---

## ✨ Notes
- This README follows the assignment spec from HackMD.
- The folder structure above matches the required architecture.