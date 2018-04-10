
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema
var userSchema = new Schema({
  name: {type: String, required: true},
  userName:{type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

var user = mongoose.model("users", userSchema);
