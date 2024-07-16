const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: String,
  displayName: String,
  email: String,
  username: String,
  dob: Date,
  auth: {
    otp: String,
  },
});
module.exports = { userSchema };
