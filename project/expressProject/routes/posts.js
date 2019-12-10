const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/getPost", (req, res) => {
    res.json(res);
});

router.get("/getPosts", (req, res) => {
    res.json(res);
});

router.post("/setPost", (req, res) => {
    req.body
});

module.exports = router;