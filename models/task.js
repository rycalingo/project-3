const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
//HAVE TO CREATE REFERENCE FOR CREATOR ID (USE BOOKS EXAMPLE)

const taskSchema = new Schema({
  title: {type: String },
  creatorID: {type: String, required: true, unique: true },
  dateDue: {type: String, required: true },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;