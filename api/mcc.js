const connect = require('../lib/mongoose');
const Mcc = require('../models/Mcc');

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }
  try {
    await connect();
    const { q } = req.query;
    if (!q) {
      res.status(200).json([]);
      return;
    }
    const regex = new RegExp(q, 'i');
    const filter = {
      $or: [
        { mcc_code: regex },
        { category: regex },
      ],
    };
    if (/^\d+$/.test(q)) {
      filter.$or.push({ mcc_code: Number(q) });
    }
    const results = await Mcc.find(filter).limit(20);
    res.status(200).json(results);
  } catch (err) {
    console.error('Search error', err);
    res.status(500).json({ error: 'Server error' });
  }
};
