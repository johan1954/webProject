const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get('/', (req, res) => {
    res.send("Managed to get to the users page.");
});

router.get("/getUser", (req, res) => {
    res.send('Getting user managed!');
});

router.post("/setUser", (req, res) => {
    console.log(req.body);
});

module.exports = router;