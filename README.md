# DevOps Practice

This repository contains separate frontend and backend applications:

- `frontend/` — React application powered by Vite.
- `backend/` — Express API.

## Backend

In a terminal:

```bash
cd backend
npm install
npm run dev
```

The API listens on port `3000` by default. Set the `PORT` environment variable to use a different port.

Endpoints:

- `GET /` — Returns a welcome message.
- `GET /health` — Returns `{ "status": "ok" }`.

## Frontend

In a separate terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the Vite URL shown in the terminal (usually `http://localhost:5173`). The frontend's `/health` requests are proxied to the backend, so start the backend as well to see its status.

For a production frontend build, run `npm run build` from `frontend/`.
