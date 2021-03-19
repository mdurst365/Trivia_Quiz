const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created_on: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("User", userSchema);