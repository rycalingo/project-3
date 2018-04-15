var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema
//HAVE TO CREATE REFERENCE FOR CREATOR ID
const taskSchema = new Schema({
  title: {type: String },
  description: {type: String, required: true, unique: true },
  duedate: {type: String, required: true },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;