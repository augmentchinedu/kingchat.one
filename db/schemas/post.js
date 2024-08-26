const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    author: String,
    text: String,
  },
  {
    timestamps: true,
  }
);

module.exports = postSchema;
