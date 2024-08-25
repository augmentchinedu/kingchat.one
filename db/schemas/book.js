const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    _id: String,
    title: String,
    author: String,
    description: String,
    subTitle: String,
    coverURL: String,
    link: String,
    published: String,
    pages: Number,
    excerpt: String,
    genres: [],
  });
  
  
module.exports = bookSchema;
