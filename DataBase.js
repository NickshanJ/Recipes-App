require('dotenv').config();
const mongoose = require('mongoose');

const URL = 'mongodb+srv://Nickshan:WhOvDeT4cPUKuy02@recipecluster.zehbj.mongodb.net/?retryWrites=true&w=majority&appName=recipeCluster';

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