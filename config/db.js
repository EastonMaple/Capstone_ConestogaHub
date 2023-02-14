const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try{
    mongoose.set('strictQuery', false);
    await mongoose.connect(db);
    console.log('MongoDB Connected...');
  } catch(err){
    console.error(err.message);
    // exit process with failure
    process.exit(1);
  }
}
module.exports = connectDB;