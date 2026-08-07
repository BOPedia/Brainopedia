const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data (required to read the honeypot field)
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files (your HTML form)
app.use(express.static('public'));


// --- 1. HEADER VALIDATION (Blocks lazy scripts) ---
function blockBadBots(req, res, next) {
  const userAgent = req.headers['user-agent'] || '';
  
  if (!userAgent) {
    return res.status(403).send('Forbidden: Missing User-Agent');
  }

  const blockedAgents = ['curl', 'python-requests', 'wget', 'scrapy', 'postman'];
  const isBot = blockedAgents.some(bot => userAgent.toLowerCase().includes(bot));

  if (isBot) {
    return res.status(403).send('Automated requests are not allowed');
  }
  next();
}
// Apply header validation to all routes
app.use(blockBadBots);


// --- 2. RATE LIMITING (Stops brute force) ---
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: 'Too many requests from this IP, please try again after 15 minutes'
});
// Apply rate limiting to all routes
app.use(globalLimiter);


// --- 3. THE HONEYPOT ROUTE (Catches dumb scrapers) ---
app.post('/submit', (req, res) => {
  // If the honeypot field has ANY value, it's a bot
  if (req.body.bot_trap) {
    console.log(`[ALERT] Bot caught trying to submit form from IP: ${req.ip}`);
    // Send a fake success so the bot moves on
    return res.status(200).send('Login successful (Fake out!)'); 
  }

  // If the honeypot is empty, it's likely a human. Process normally.
  const { username, password } = req.body;
  console.log(`[SUCCESS] Human user '${username}' logged in.`);
  
  res.send(`Welcome, ${username}! Your form was submitted successfully.`);
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running! Open https://localhost:${PORT} in your browser.`);
});