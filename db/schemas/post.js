const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
  type: String,
  url: String,
});

const postSchema = new mongoose.Schema(
  {
    authors: [String],
    text: String,
    media: [mediaSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = postSchema;
