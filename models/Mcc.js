const mongoose = require('mongoose');

const MccSchema = new mongoose.Schema({
  mcc_code: mongoose.Schema.Types.Mixed,
  category: String,
});

module.exports = mongoose.model('Mcc', MccSchema, 'stripe_list');
