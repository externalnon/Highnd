
# highend eSports Hub

Welcome to the official repository of highend eSports, a premier organization dedicated to building the future of competitive gaming! 

# About highend eSports

highend eSports is a gaming organization focused on developing top-tier talent, hosting innovative tournaments, and creating a vibrant community for competitive gamers worldwide. Our mission is to provide a professional, engaging, and interactive hub where players, fans, and partners unite to celebrate and advance the world of esports.

# Features

Interactive dashboards for teams, players, and live tournaments.Secure user authentication and profile management.Real-time match updates and live score tracking.Community chat and notifications for events.Social media integration for sharing highlights.Responsive design for desktop and mobile devices.



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

