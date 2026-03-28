const mongoose = require('mongoose');

async function connectDB () {
   try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to DB");
   } catch (error) {
    console.log("Error: ", err);
   }
}

module.exports = connectDB;