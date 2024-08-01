const { Chat } = require("../db");
const users = [];

const initIO = (app) => {
  // App
  app.on("connection", (user) => {
    // Set UID on Socket For Identification
    user.uid = user.handshake.auth.uid;

    // Add User To Online Users
    users.push(user);
    initUserSocket(app, user);
  });

  //   Rooms
  const rooms = app.of("/rooms");

  rooms.on("connection", (socket) => {
    console.log("Rooms", socket.id);
  });
};

const initUserSocket = (app, user) => {
  console.log("New User", user.id, user.uid);
  console.log("Someone Just Connected");

  // On Disconnection
  user.on("disconnect", () => {
    const userIndex = users.findIndex((socket) => socket.uid == user.uid);
    users.splice(userIndex, 1);
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
      chat.meta[receiverID].lastRead = lastRead;
      chat.markModified("meta");

      // Add New Message
      chat.messages.unshift(message);
    }

    chat.save();

    res(chatid, { message, reciept: { lastSent, lastRead } });

    const reciever = users.find((socket) => socket.uid == receiverID);
    if (reciever) reciever.emit("message", { chatid, message });
  });

  // Update Reciepts
  user.on("reciept", async ({ uid, chatid, reciept }) => {
    const splitChatID = chatid.split(uid);
    let user1 = uid;
    let user2 = splitChatID.find((id) => id.length > 0);

    let chat = await Chat.findById(chatid);

    // Reciept Guards
    if (reciept.lastDelivered) {
      try {
        chat.meta[user2].lastDelivered = reciept.lastDelivered;
        chat.markModified("meta");

        chat.save();
      } catch (error) {
        console.log(error);
      }
      console.log("user2: " + user2);
    }

    if (reciept.lastRead) {
      try {
        chat.meta[user1].lastRead = reciept.lastRead;
        chat.markModified("meta");

        chat.save();
      } catch (error) {
        console.log(error);
      }
    }
  });
};
module.exports = { initIO };
