# Highend Esports Hub

Modern React + Vite frontend with a minimal Express backend.

## Requirements

- Node.js 18+
- npm

## Getting started

### Frontend

```sh
cd frontend
npm install
npm run dev
```

The app runs at http://localhost:5173 by default.

### Backend

```sh
cd backend
npm install
npm run dev
```

The server runs at http://localhost:4000.

Endpoints:
- GET /health → server status
- POST /api/register → accept join requests

## Tech stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- Express, CORS, dotenv, morgan

## Scripts

- Frontend: `npm run dev`, `npm run build`, `npm run preview`
- Backend: `npm run dev`, `npm start`

## Notes

- Update the backend URL in `frontend/src/components/ui/join-button.tsx` if you change ports.
