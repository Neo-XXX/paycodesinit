const mongoose = require('mongoose');

const MccSchema = new mongoose.Schema({
  mcc_code: String,
  category: String
});

module.exports = mongoose.model('Mcc', MccSchema, 'mcc');
