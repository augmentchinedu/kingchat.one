const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    _id: String,
    displayName: String,
    email: String,
    username: String,
    chats: [String],
    dob: Date,
    photoURL: String,
    lastSignInTime: String,
    auth: {
      otp: String,
    },
  },
  {
    virtuals: {
      profile: {
        get() {
          const profile = {
            username: this.username,
            displayName: this.displayName,
            photoURL: this.photoURL,
          };
          return profile;
        },
      },
    },
    methods: {},
    statics: {},
  }
);

const chatSchema = new mongoose.Schema(
  {
    _id: String,
    messages: [{ _id: false, text: String, time: Number, sender: String }],
  },
  {
    methods: {},
    statics: {
      updateChatWithNewMessage(message) {
        console.log(this, message);
      },

      async getAllChats(chatList, uid) {
        let User = mongoose.model("User", userSchema);
        let chats = [];

        for (chatid of chatList) {
          let chat;

          // Get Chat First
          chat = await this.findById(chatid);
          chat = chat.toObject();

          // Get Chat Recipient Profile
          let recipientID = chatid.split(uid).find((id) => id.length > 0);
          let recipient = await User.findById(recipientID);

          // Add Recipient Profile to Chat
          chat.recipient = recipient.profile;

          console.log(chat);
          chats.push(chat);
        }

        return chats;
      },
    },
  }
);

module.exports = { userSchema, chatSchema };
