const mongoose = require("mongoose");
const { userSchema, chatSchema } = require("../schemas");

const User = mongoose.model("User", userSchema);
const Chat = mongoose.model("Chat", chatSchema);

// Register Change Events for Users & Chats

//
module.exports = { User, Chat };
