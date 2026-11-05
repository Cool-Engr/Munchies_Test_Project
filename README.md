# Munchies Frontend

I've implemented frontend page using Next.js + Material UI + Tailwind CSS + TypeScript

## Setup instructions

Prerequisites: Node.js (recommended >= 18) and npm.

Install dependencies:

```bash
cd frontend
npm install
```

Run in development mode:

```bash
npm run dev
```

## Project structure (major folders)

- `app/` — Next.js app routes and pages
- `components/` — React components (cards, header, sidebar, etc.)
- `constants/` — shared constants
- `context/` — React contexts
- `layout/` — layout components
- `public/` — static assets
- `styles/` — global CSS / Tailwind
- `types/` — TypeScript types

# Munchies Backend

I've implemented backend proxy server page using Express + TypeScript

## Setup instructions

Prerequisites:

```bash
Node.js (recommended >= 18) and npm
Redis Server
```

Install dependencies:

```bash
cd backend
npm install
```

Run in development mode:

```bash
npm run dev
```

## Project structure

- `src/` — application source
  - `app.ts`, `index.ts` — entry points
  - `config/` — configuration (logger, redis)
  - `controllers/`, `routes/`, `middlewares/` — API layers
  - `utils/` — helpers and error handling
