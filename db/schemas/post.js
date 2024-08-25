const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  author: String,
  text: String,
  time: Date,
});

module.exports = postSchema;
