const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    })
}

module.exports = connectDB;