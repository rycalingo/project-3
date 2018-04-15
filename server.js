import Tasks from "./client/src/components/CreateTask";
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
//=======================================================
router.route("/task")
 //retrieve all comments from the database
 .get(function(req, res) {
 //looks at our Comment Schema
 Task.find(function(err, task) {
 if (err)
 res.send(err);
 //responds with a json object of our database comments.
 res.json(Task)
 });
 })
 //post new comment to the database
 .post(function(req, res) {
 var Task = new Task();
 //body parser lets us use the req.body
 Task.author = req.body.author;
 Task.text = req.body.text;

Task.save(function(err) {
 if (err)
 res.send(err);
 res.json({ message: "Comment successfully added!" });
 });
 });
//======================================================
//Use our router configuration when we call /api
app.use("/api", router);
//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});

//=======================================================
// Define any API routes before this runs
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/taskList");

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});