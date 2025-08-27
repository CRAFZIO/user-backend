const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectToMongo } = require('./config/mongo');
const routes = require('./routes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Health
app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'bus-backend', env: process.env.NODE_ENV || 'development' });
});

// API routes
app.use('/api', routes);

const port = process.env.PORT || 4000;

connectToMongo()
  .then(() => {
    app.listen(port, () => {
      console.log(`Backend listening on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to start server:', err);
    process.exit(1);
  });



