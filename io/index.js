const { Chat, User } = require("../db");

let io;

let users = new Proxy([], {
  set(array, prop, value) {
    array[prop] = value;
    if (prop !== "length") {
      let profiles = [];

      array.forEach(({ profile }) => profiles.push(profile));
      io.emit("online", { online: profiles });
    }

    return true;
  },
});

const initIO = (app) => {
  io = app;

  // App
  app.on("connection", async (user) => {
    // Set UID on Socket For Identification
    user.uid = user.handshake.auth.uid;

    let { profile } = await User.findById(user.uid);
    user.profile = profile;

    // Add User To Online Users
    initUserSocket(app, user);
    users.push(user);
  });

  //   Rooms
  const rooms = app.of("/rooms");

  rooms.on("connection", (socket) => {
    console.log("Rooms", socket.id);
  });
};

const initUserSocket = (app, user) => {
  console.log(user.uid, "Just Connected");

  // On Disconnection
  user.on("disconnect", () => {
    const userIndex = users.findIndex((socket) => socket.uid == user.uid);
    users.splice(userIndex, 1);
  });

  user.on("init", () => {
    // Initialize King Chat User
    let online = [];
    users.forEach(({ profile }) => online.push(profile));

    user.emit("online", { online });
  });

  // On Each Message Sent
  user.on("send", async (payload, res) => {
    console.log(user.uid);
    console.log(payload);

    let chat;

    const time = Date.now();
    const { chatid, uid } = payload;
    const message = { text: payload.message, time, sender: uid };

    console.log(chatid, message);

    chat = await Chat.findById(chatid);

    let splitChatID = chatid.split(uid);

    let senderID = uid;
    let receiverID = splitChatID.find((id) => id.length > 0);

    let lastSent, lastRead;
    lastRead = lastSent = Date.now();

    // If Chat is New: Add ChatID to Users Chats
    if (!chat) {
      // Enter Chat Record To Users

      for (let uid of [senderID, receiverID]) {
        console.log(uid);
        let user = await User.findById(uid);
        user.chats.push(chatid);
        user.save();
      }

      // Create New Chat
      chat = new Chat({
        _id: chatid,
        meta: {
          [senderID]: {
            lastSent,
            lastDelivered: 0,
            lastRead: 0,
          },
          [receiverID]: {
            lastSent: 0,
            lastDelivered: 0,
            lastRead: 0,
          },
        },
        messages: [message],
      });
    }

    // If Chat Already Exists: Update.
    else {
      // Update Sent Status
      chat.meta[senderID].lastSent = lastSent;
      chat.meta[senderID].lastRead = lastRead;
      chat.markModified("meta");

      // Add New Message
      chat.messages.unshift(message);
    }

    chat.save();

    // Update Sender
    res(chatid, { message, reciept: { lastSent, lastRead } });

    // Update Reciever
    const reciever = users.find((socket) => socket.uid == receiverID);
    if (reciever) reciever.emit("message", { chatid, message });
  });

  // Update Reciepts
  user.on("reciept", async ({ uid, chatid, reciept }, res) => {
    const splitChatID = chatid.split(uid);
    let senderID = uid;
    let receiverID = splitChatID.find((id) => id.length > 0);

    let chat = await Chat.findById(chatid);

    // Reciept Guards
    if (reciept.lastDelivered) {
      try {
        chat.meta[senderID].lastDelivered = reciept.lastDelivered;
        chat.markModified("meta");

        chat.save();
      } catch (error) {
        console.log(error);
      }
    }

    if (reciept.lastRead) {
      try {
        chat.meta[senderID].lastRead = reciept.lastRead;
        chat.markModified("meta");

        chat.save();
      } catch (error) {
        console.log(error);
      }
    }

    // Update Sender
    res({ chatid, reciept });

    // Update Reciever
    const reciever = users.find((socket) => socket.uid == receiverID);
    if (reciever) reciever.emit("reciept", { chatid, reciept });
  });
};
module.exports = { initIO };
