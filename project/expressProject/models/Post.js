const mongoose = require("mongoose");


const PostSchema = mongoose.Schema( {
    postContent: {
        type: String,
        required: true
    },
    postPublisher: {
        type: String,
        required: true
    },
    postPublic: {
        type: Number,
        required: true, 
        default: 1
    }
});

module.exports = mongoose.model("Post", PostSchema);