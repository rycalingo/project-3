var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcryptjs = require('bcryptjs');
// const SALT_WORK_FACTOR = 10;

// User
//Schema
var userSchema = new Schema({
  name: {type: String, required: true},
  userName:{type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

var User = mongoose.model("User", userSchema);

module.exports = User;