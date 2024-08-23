const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    _id: String,
    displayName: String,
    email: String,
    username: String,
    description: String,
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
            description: this.description,
          };
          return profile;
        },
      },
    },
    methods: {},
    statics: {},
  }
);
userSchema.set("toObject", { virtuals: true });
userSchema.set("toJSON", { virtuals: true });

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
          console.log(error);
        }

        return chats;
      },
    },
  }
);

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

module.exports = { userSchema, chatSchema, bookSchema };
