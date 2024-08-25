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

module.exports = userSchema;
