const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect()
    .then(()=>{
        console.log("connected to DB");
    });
}

module.exports = connectToDb