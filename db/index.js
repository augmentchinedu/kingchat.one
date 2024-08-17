const { User, Chat } = require("./models");

const services = require("../classes/services");
const mongoose = require("mongoose");

async function init() {
  try {
    let isConnected = await mongoose.connect(
      `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@kc0.4ep3ceo.mongodb.net/app?retryWrites=true&w=majority`
    );
    if (isConnected) console.log("Connected To App Database");
    await services.init(User);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  User,
  Chat,
  init,
};
