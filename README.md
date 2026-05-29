# Artifact3 — Express Tutorial Server

A minimal Node.js server built with the [Express.js](https://expressjs.com/) web
framework. It exposes two HTTP `GET` endpoints that return plaintext responses:
a `Hello world` endpoint (the preserved baseline) and a `Good evening` endpoint
(the new addition).

## Prerequisites

- **Node.js** — version **24 LTS** is recommended and is pinned in
  [`.nvmrc`](.nvmrc). The project requires Node.js **`>=18`** (declared as
  `engines.node` in [`package.json`](package.json)).
- **npm** — bundled with Node.js; used to install dependencies and run the
  start script.

If you use [nvm](https://github.com/nvm-sh/nvm), run `nvm use` in the project
root to automatically select the Node.js version pinned in `.nvmrc`.

## Installation

Install the project dependencies:

```bash
npm install
```

This installs Express (`^5.2.1`) and uses the committed `package-lock.json` so
that installs are reproducible.

## Running the Server

Start the server:

```bash
npm start
```

This runs the `start` script (`node server.js`). The server listens on
`process.env.PORT || 3000` — that is, port **3000** by default, overridable via
the `PORT` environment variable.

## Endpoints

| Method | Path            | Status | Response body  |
| ------ | --------------- | ------ | -------------- |
| `GET`  | `/`             | `200`  | `Hello world`  |
| `GET`  | `/good-evening` | `200`  | `Good evening` |

With the server running on the default port, you can verify both endpoints with
`curl`:

```bash
curl -s localhost:3000/              # -> Hello world
curl -s localhost:3000/good-evening  # -> Good evening
```

## Project Structure

- `server.js` — the Express application: creates the `app`, registers both
  routes (`GET /` and `GET /good-evening`), and starts the HTTP listener.
- `package.json` — project manifest: metadata, the `start` script, and the
  `express` dependency.
- `package-lock.json` — lockfile pinning the exact resolved dependency tree for
  reproducible installs.
- `.gitignore` — keeps `node_modules/`, log files, and `.env` out of version
  control.
- `.nvmrc` — pins the recommended Node.js version (`24`).
