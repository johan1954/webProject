const express = require("express");
const mongoose = require("mongoose");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.use(cors());
app.use(bodyParser.json());
app.use('/users', usersRoute);
app.use('/posts', postsRoute);

// No view engine or other frontEnd, so respond to favicon with status 204
app.get('/favicon.ico', (req, res) => res.status(204));

app.listen(8080, () => {
    console.log("started database server")
});


/* For local developer! */
/* Remember to start your mongod for connection and storage to the database! */

// var mongoURL = "mongodb://localhost:27017/expressDatabase";

// mongoose.connect(mongoURL, { useNewUrlParser: true }, () => 
// console.log("Database connection established!"))
/* End of for local dev */

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

//End of file