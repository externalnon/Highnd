# Highend Esports Hub

A modern esports hub with a React + Vite frontend and a minimal Express backend.

## Monorepo Structure

- `frontend/` — Vite + React + TypeScript UI
- `backend/` — Express API server

## Prerequisites

- Node.js 18+
- npm

## Getting Started

### Backend
```sh
cd backend
npm install
npm run dev
```
- Server: http://localhost:4000
- Endpoints:
  - GET /health — server status
  - POST /api/register — accept join requests

### Frontend
```sh
cd frontend
npm install
npm run dev
```
- App: http://localhost:5173 (by default)

If you change backend port/host, update the URL inside `frontend/src/components/ui/join-button.tsx`.

## Scripts
- Frontend: dev, build, preview
- Backend: dev, start

## Environment
- Backend: copy `.env.example` to `.env` (optional) and set `PORT`.

## License
MIT

