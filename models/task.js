var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema
//HAVE TO CREATE REFERENCE FOR CREATOR ID

// refs
// creatorID: {type: String, required: true, unique: true },
const taskSchema = new Schema({
  title: {type: String },
  description: {type: String, required: true },
  duedate: {type: String, required: true }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;