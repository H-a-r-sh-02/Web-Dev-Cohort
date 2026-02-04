const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true 
    },
    caption: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
});

const postModel = mongoose.model('post', postSchema);

module.exports = postModel;