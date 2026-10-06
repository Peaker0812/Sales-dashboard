const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('frontend'));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', time: new Date() });
});

// API Routes
app.use('/api', apiRoutes);

// Start server (only when run directly, not when imported for tests)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
