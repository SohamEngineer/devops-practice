# Node.js Backend

A minimal Express backend with JSON parsing, a root endpoint, and a health check.

## Setup

```bash
npm install
```

## Run

Start the server:

```bash
npm start
```

Run with automatic restarts during development:

```bash
npm run dev
```

The server listens on port `3000` by default. Set the `PORT` environment variable to use a different port.

## Endpoints

- `GET /` — Returns a welcome message.
- `GET /health` — Returns `{ "status": "ok" }`.
