/**
 * server.js — Express.js application entry point (Artifact3 tutorial).
 *
 * Hosts two plaintext HTTP GET endpoints on a single Express `app` instance:
 *   - GET /              -> "Hello world"   (preserved baseline endpoint, FR-3)
 *   - GET /good-evening  -> "Good evening"  (new endpoint, FR-2)
 *
 * Module system: CommonJS (`require`) — package.json declares no "type": "module".
 * Start the server with `npm start` (which runs `node server.js`).
 */

// Express web framework — declared as `express` (^5.2.1) in package.json.
const express = require('express');

// A single Express application instance hosts both routes.
const app = express();

// GET / — preserved baseline endpoint. Returns the exact plaintext body
// "Hello world". This output is contractual and must remain byte-identical.
app.get('/', (req, res) => res.send('Hello world'));

// GET /good-evening — new endpoint. Returns the exact plaintext body
// "Good evening".
app.get('/good-evening', (req, res) => res.send('Good evening'));

// Bind the HTTP listener. The port is environment-overridable via PORT and
// defaults to 3000 (the conventional Express tutorial pattern).
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
