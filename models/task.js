var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema
//HAVE TO CREATE REFERENCE FOR CREATOR ID

// refs
// creatorID: {type: String, required: true, unique: true },
const taskSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  title: {type: String },
  description: {type: String, required: true },
  assignee:  {type: String, required: true },
  duedate: {type: String, required: true }
}, {strict: true, strictQuery: true});

const Task = mongoose.model("Task", taskSchema);

Task.find({ notInSchema: 1});
module.exports = Task;