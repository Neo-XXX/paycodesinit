require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Mcc = require('./models/Mcc');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.set('strictQuery', false);
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error', err));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to PayCodes API' });
});

app.get('/api/mcc', async (req, res) => {
  const { q } = req.query;
  if (!q) {
    return res.json([]);
  }
  try {
    const regex = new RegExp(q, 'i');
    const filter = {
      $or: [
        // Match MCC codes that contain the query
        { mcc_code: regex },
        // Or categories that contain the query, case-insensitive
        { category: regex }
      ]
    };

    const results = await Mcc.find(filter).limit(20);
    res.json(results);
  } catch (err) {
    console.error('Search error', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
