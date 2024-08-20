const mongoose = require("mongoose");
const { userSchema, chatSchema, bookSchema } = require("../schemas");

const User = mongoose.model("User", userSchema);
const Chat = mongoose.model("Chat", chatSchema);
const Book = mongoose.model("Book", bookSchema);

// Register Change Events for Users & Chats

//
module.exports = { User, Chat, Book };
