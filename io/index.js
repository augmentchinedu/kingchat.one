const { User } = require("../db");
const { initUserSocket } = require("./user");
const { initRoomsSocket } = require("./rooms");
let { setIO } = require("./io");

let { getUsers, addUser, addAnonymous } = require("../data");

const initIO = (io) => {
  setIO(io);

  let rooms = io.of("/rooms");

  io.on("connection", async (user) => {
    user.uid = user.handshake.auth.uid;

    console.log(user.uid, "Just Connected");

    if (user.uid.substring(0, 9) !== "anonymous") {
      let { profile } = await User.findById(user.uid);
      user.profile = profile;
    }

    // Add User To Online Users
    initUserSocket(user);
    if (user.handshake.auth.uid.substring(0, 9) !== "anonymous") {
      addUser(user);
      console.log(getUsers().length, "pp");
    } else addAnonymous(user);
  });

  rooms.on("connection", async (user) => {
    user.uid = user.handshake.auth.uid;

    console.log("Rooms", user.uid);

    if (user.uid.substring(0, 9) !== "anonymous") {
      let { profile } = await User.findById(user.uid);
      user.profile = profile;
    }

    initRoomsSocket(user);
  });
};

module.exports = { initIO };
