const mongoose = require('mongoose');

async function connectToMongo() {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error('MONGO_URI is not set');
  }

  mongoose.set('strictQuery', true);
  await mongoose.connect(mongoUri, {
    dbName: process.env.MONGO_DB || undefined,
  });

  console.log('Connected to MongoDB');
}

module.exports = { connectToMongo };


