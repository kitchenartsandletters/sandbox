// server.cjs - simple Express static server with basic auth for sandbox
// Usage:
//  - Set SANDBOX_USER and SANDBOX_PASS in environment (Railway secrets)
//  - For local testing, create a .env with SANDBOX_USER and SANDBOX_PASS
//  - Build your frontend: npm run build
//  - Start server: npm start

// Optional: local .env support
require('dotenv').config();

const express = require('express');
const path = require('path');
const basicAuth = require('express-basic-auth');

const app = express();
const PORT = process.env.PORT || 3000;

// Credentials (set these in Railway -> Environment variables)
const SANDBOX_USER = process.env.SANDBOX_USER || 'admin';
const SANDBOX_PASS = process.env.SANDBOX_PASS || 'secret';

// Basic auth middleware (challenge=true shows browser popup)
app.use(basicAuth({
  users: { [SANDBOX_USER]: SANDBOX_PASS },
  challenge: true,
  unauthorizedResponse: (req) => req.auth ? 'Credentials rejected' : 'No credentials provided'
}));

// Serve static files from build output (Vite/CRA -> dist)
const staticPath = path.join(__dirname, 'dist');
app.use(express.static(staticPath, { extensions: ['html'] }));

// New (regex fallback, works with Express 5)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});