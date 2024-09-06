const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    authors: [String],
    text: String,
    media: [
      {
        type: String,
        url: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = postSchema;
