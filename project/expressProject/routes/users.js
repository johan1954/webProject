const express = require("express");
const router = express.Router();
const User = require("../models/User");

// This is just a check to check that the page is available.
router.get('/', (req, res) => {
    res.send("Managed to get to the users page.");
});

// Get all users - debugging purposes only, not to be used in real use -cases.
router.get("/users", async (req, res) => {
    console.log("finding all users");
    try {
        const allUsers = await User.find();
        res.json(allUsers);
    }
    catch (err) {
        res.status(404).json({message: (err)});
    }
}); 

// Get a specific user by username
router.get("/:username", async (req, res) => {
    console.log("finding:", req.params.username);
    try {
        const aUser = await User.findOne({ username: req.params.username });
        res.json(aUser);
    }
    catch (err){
        res.status(404).json({message: err});
    }
}); 

// Save a new user to the database
router.post("/setUser", async (req, res) => {
    console.log(req.body);
    const saveThisUser = new User({
        username: req.body.username,
        password: req.body.password
    });

    try {
        const savedData = await saveThisUser.save()
        res.json(savedData);
        console.log("Successfully saved to database!");
    }
    catch (err) {
        res.json({message: err});
    }
});

router.delete("/delUser/:username", async (req, res) => {
    console.log("deleting:", req.params.username);
    try {
        const delUser = await User.remove({ username: req.params.username });
        res.json(delUser);
        console.log("done");
    }
    catch (err){
        res.status(404).json({message: err});
    }
});

module.exports = router;