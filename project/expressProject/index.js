const express = require("express");
const mongoose = require("mongoose");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const bodyParser = require("body-parser");

const app = express();

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.use(bodyParser.json());
app.use('/users', usersRoute);
app.use('/posts', postsRoute);



// var mongoURL = "mongodb://localhost:27017/expressDatabase";

// mongoose.connect(mongoURL, { useNewUrlParser: true }, () => 
// console.log("Database connection established!"))

app.listen(3000, () => {
    console.log("started database server")
});

// Next lines are for rahti deployed database structure:
// Not my own code, directly copied and edited from the course demo.
const databaseHook = require('./db');
const mongoURL = databaseHook.urlbuilder();

databaseHook.connect(databaseHook.urlbuilder(), function(err) {
if (err) {
    console.log("Unable to connect to Mongo.");
    process.exit(1);
}
});

// Catch 404 and forward to error handler - default
app.use(function(req, res, next) {
next(createError(404));
});

// Register error handler - default
app.use(function(err, req, res, next) {
// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get("env") === "development" ? err : {};

// render the error page
res.status(err.status || 500);
res.render("error");
});
  