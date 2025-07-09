const mongoose = require('mongoose');

function connectToDB() {
    mongoose.connect("")
    .then(()=>{
        console.log("connected to DB");
    });
}

module.exports = connectToDB