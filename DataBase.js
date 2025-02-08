require('dotenv').config();
const mongoose = require('mongoose');

const URL = process.env.DB;

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;