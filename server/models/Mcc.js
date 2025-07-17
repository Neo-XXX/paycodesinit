const mongoose = require('mongoose');

const MccSchema = new mongoose.Schema({
  // Some records may store the code as a number, others as a string
  mcc_code: mongoose.Schema.Types.Mixed,
  category: String
});

module.exports = mongoose.model('Mcc', MccSchema, 'stripe_list');

