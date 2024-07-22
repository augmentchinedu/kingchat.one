const { User } = require("./models");
const mongoose = require("mongoose");

async function init() {
  try {
    let isConnected = await mongoose.connect(
      "mongodb+srv://admin:tender300@kc0.4ep3ceo.mongodb.net/app?retryWrites=true&w=majority"
    );
    if (isConnected) console.log("Connecting To App Database");
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  init,
  User,
};
