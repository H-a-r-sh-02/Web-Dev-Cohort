const mongoose = require('mongoose');

function connectToDB() {
    mongoose.connect("mongodb+srv://its_Harsh:xx2p6P8UpqT2ifhy@cluster0.jeo5q9i.mongodb.net/cohort")
    .then(()=>{
        console.log("connected to DB");
    });
}

module.exports = connectToDB