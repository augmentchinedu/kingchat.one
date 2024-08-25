const mongoose = require("mongoose");
const {
  userSchema,
  chatSchema,
  bookSchema,
  postSchema,
} = require("../schemas");

const User = mongoose.model("User", userSchema);
const Chat = mongoose.model("Chat", chatSchema);
const Book = mongoose.model("Book", bookSchema);
const Post = mongoose.model("Post", postSchema);

// Register Change Events for Users & Chats

//

module.exports = { User, Chat, Book, Post };
