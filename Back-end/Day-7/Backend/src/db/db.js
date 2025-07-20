const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Connected to DB");
    })
    .catch((err)=>{
        console.error('error connecting to DB:', err);
    });
}
module.exports = connectToDb;