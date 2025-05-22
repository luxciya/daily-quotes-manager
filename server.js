const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const quoteRoutes = require('./routes/quotes');
const app = express();

// ✅ Connect to MongoDB (without deprecated options)
mongoose.connect('mongodb://localhost/daily-quotes')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

app.use(cors());
app.use(express.json());
app.use('/api/quotes', quoteRoutes);

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server started on http://localhost:${PORT}`));
