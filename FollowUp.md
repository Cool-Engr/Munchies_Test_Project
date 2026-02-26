# Discussions for follow-up

- Why did you choose your specific architecture (separate apps vs full-stack framework)?

  I built frontend and backend separately for running independently and talking via API, as I thought there would be several cases for customizing APIs due to frontend demands.

- How did you implement the caching strategy?

  I implemented caching strategy mainly in backend service using Redis.
  I set TTL(10 min) to individual API requests which calls real server you suggested.

- How would you approach testing this proxy application?

  I made simple test js file to send bulk requests to my backend proxy service and measured the response time.
  As a result, all requests except first one took little time.

- What would you improve given more time?

  If there is more time, I'll use React Query for caching frontend requests and build RabbitMQ Pub/Sub queue system for communication as well as Redis Caching.

- How would you handle scaling this proxy to handle high traffic?

  I will provide containerization and orchestration using Docker and Kubernetes and RabbitMQ Pub/Sub queue system for making communication more reliable.

- How would you structure the codebase for a team?

  I think it's important to make scaffold clear and maintainable so that it can be maintained and scaled without much pain.
  So I prefer monorepo with separate frontend and backend services.

  Frontend consists of following parts.
  - `app/` — Next.js app routes and pages
  - `components/` — React components (cards, header, sidebar, etc.)
  - `constants/` — shared constants
  - `context/` — React contexts
  - `layout/` — layout components
  - `public/` — static assets
  - `styles/` — global CSS / Tailwind
  - `types/` — TypeScript types

  Backend consists of following parts.
  - `src/` — application source
  - `app.ts`, `index.ts` — entry points
  - `config/` — configuration (logger, redis)
  - `controllers/`, `routes/`, `middlewares/` — API layers
  - `utils/` — helpers and error handling

- What production concerns would you have with this proxy setup?

  There would be performance and scaling issues, reliability and operational concerns, routing and path rewriting issues, etc.
