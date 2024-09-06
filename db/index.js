const models = require("./models");

const mongoose = require("mongoose");

async function init() {
  try {
    let isConnected = await mongoose.connect(
      `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@kc0.4ep3ceo.mongodb.net/app?retryWrites=true&w=majority`
    );
    if (isConnected) console.log("Connected To App Database");
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  ...models,
  init,
};
