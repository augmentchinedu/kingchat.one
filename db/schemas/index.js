const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    _id: String,
    displayName: String,
    email: String,
    username: String,
    dob: Date,
    chats: [String],
    photoURL: String,
    lastSeen: String,
    auth: {
      otp: String,
    },
  },
  {
    virtuals: {
      profile: {
        get() {
          const profile = {
            _id: this._id,
            username: this.username,
            displayName: this.displayName,
            photoURL: this.photoURL,
            lastSeen: this.lastSeen,
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
    meta: {},
    messages: [{ _id: false, text: String, time: Number, sender: String }],
  },
  {
    methods: {},
    statics: {
      updateChatWithNewMessage(message) {
        console.log(this, message);
      },

      async getAllChats(chatList, uid) {
        let chats = [];
        let User = mongoose.model("User", userSchema);

        try {
          for (let chatid of chatList) {
            let chat;

            // Get Chat First
            chat = await this.findById(chatid);
            chat = chat.toObject();

            // Get Chat Recipient Profile
            let recipientID = chatid.split(uid).find((id) => id.length > 0);
            let recipient = await User.findById(recipientID);

            // Add Recipient Profile to Chat
            chat.profile = recipient.profile;

            chats.push(chat);
          }
        } catch (error) {
          console.log(error);
        }

        return chats;
      },
    },
  }
);

module.exports = { userSchema, chatSchema };
