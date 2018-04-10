
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema
//HAVE TO CREATE REFERENCE FOR CREATOR ID (USE BOOKS EXAMPLE)

var taskSchema = new Schema({
  title: type: String,
  creatorID: {type: String, required: true, unique: true },
  dateDue: { type: String, required: true },
});

var task = mongoose.model("tasks", taskSchema);