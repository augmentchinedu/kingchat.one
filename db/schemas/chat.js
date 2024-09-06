const mongoose = require("mongoose");

const userSchema = require("./user");

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
            let recipient;
            // Get Chat Recipient Profile
            let recipientID = chatid.split(uid).find((id) => id.length > 0);
            if (recipientID.substring(0, 9) == "anonymous") {
              recipient = {
                profile: {
                  _id: recipientID,
                  displayName:
                    "Anonymous " + recipientID.split("anonymous-")[1],
                  photoURL:
                    "https://storage.googleapis.com/kingchatone.appspot.com/users/avatars/anonymous.jpeg",
                },
              };
            } else recipient = await User.findById(recipientID);

            // Add Recipient Profile to Chat
            chat.profile = recipient.profile;

            chats.push(chat);
          }
        } catch (error) {
          console.error(error);
        }

        return chats;
      },
    },
  }
);

module.exports = chatSchema;
