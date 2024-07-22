const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: String,
  displayName: String,
  email: String,
  username: String,
  dob: Date,
  photoURL: String,
  lastSignInTime: String,
  auth: {
    otp: String,
  },
});
module.exports = { userSchema };
