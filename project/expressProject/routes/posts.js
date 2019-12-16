const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Get all posts from a specific publisher
router.get("/getPost/:postPublisher", async (req, res) => {
    console.log("finding:", req.params.postPublisher);
    try {
        const allPosts = await Post.find({ postPublisher: req.params.postPublisher });
        res.json(allPosts);
    }
    catch (err){
        res.status(404).json({message: err});
    }
}); 

// Get all posts
router.get("/getPosts", async (req, res) => {
    try {
        const allPosts = await Post.find();
        res.json(allPosts);
    }
    catch (err) {
        res.json({message: (err)});
    }
});

// Create a new post
router.post("/setPost", async (req, res) => {
    let public = 1;
    if (req.body.postPublic === 0) {
        let public = 0;
    } 
    console.log(req.body);
    const saveThisPost = new Post({
        postContent: req.body.postContent,
        postPublisher: req.body.postPublisher,
        postPublic: public
    });

    try {
        const savedData = await saveThisPost.save()
        res.json(savedData);
    }
    catch (err) {
        res.json({message :err});
    }
});

// Delete a post
router.delete("/delPost/:postId", async (req, res) => {
    console.log("finding:", req.params.postId);
    try {
        const aPost = await Post.remove({ _id: req.params.postId });
        res.json(aPost);
    }
    catch (err){
        res.status(404).json({message: err});
    }
}); 
// Update a post
router.patch("/patchPost/:postId", async (req, res) => {
    console.log("finding:", req.params.postId);
    try {
        const aPost = await Post.update({ _id: req.params.postId });
        res.json(aPost);
    }
    catch (err){
        res.status(404).json({message: err});
    }
}); 

module.exports = router;