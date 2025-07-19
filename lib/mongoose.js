const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    const uri = process.env.MONGO_URI;
    if (!uri || !/^mongodb(?:\+srv)?:\/\//.test(uri.trim())) {
      throw new Error('MONGO_URI environment variable is missing or malformed');
    }
    cached.promise = mongoose.connect(uri).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

module.exports = connect;
