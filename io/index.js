const { User } = require("../db");
const { initUserSocket } = require("./user");
const { initRoomsSocket } = require("./rooms");
let { setIO } = require("./io");

let { users, anonymous } = require("../db/users");

const initIO = (io) => {
  setIO(io);

  let rooms = io.of("/rooms");

  io.on("connection", async (user) => {
    // Set UID on Socket For Identification
    user.uid =
      user.handshake.auth.uid == "anonymous" ? null : user.handshake.auth.uid;

    console.log(user.uid, "Just Connected");
    if (user.uid) {
      let { profile } = await User.findById(user.uid);
      user.profile = profile;
    }

    // Add User To Online Users
    initUserSocket(user);
    if (user.uid) users.push(user);
    else anonymous.push(user);
  });

  rooms.on("connection", async (user) => {
    user.uid =
      user.handshake.auth.uid == "anonymous" ? null : user.handshake.auth.uid;

    console.log("Rooms", user.id);

    if (user.uid) {
      let { profile } = await User.findById(user.uid);
      user.profile = profile;
    }

    initRoomsSocket(user);
  });
};

module.exports = { initIO };
