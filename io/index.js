const { Chat, User } = require("../db");
const initIO = (app) => {
  // App
  app.on("connection", (socket) => {
    user(socket);
  });

  //   Rooms
  const rooms = app.of("/rooms");

  rooms.on("connection", (socket) => {
    console.log("Rooms", socket.id);
  });
};

const user = (user) => {
  console.log("New User", user.id);
  console.log("Someone Just Connected");

  // On Each Message Sent
  user.on("send", async (payload) => {
    console.log(payload);

    let chat;

    const time = Date.now();
    const { chatid, uid } = payload;
    const message = { text: payload.message, time, sender: uid };

    console.log(chatid, message);

    chat = await Chat.findById(chatid);

    // If Chat is New: Add ChatID to Users Chats
    if (!chat) {
      // Enter Chat Record To Users

      let splitChatID = chatid.split(uid);
      console.log(splitChatID);
      user1 = uid;
      user2 = splitChatID.find((id) => id.length > 0);

      console.log(user1, user2);

      [user1, user2].forEach(async (uid) => {
        let user = await User.findById(uid);
        user.chats.push(chatid);
        await user.save();
      });

      chat = new Chat({
        _id: chatid,
        messages: [message],
      });
    }
    // If Chat Already Exists: Update.
    else chat.messages.unshift(message);

    console.log(chat);
    chat.save();

    user.emit("sent", { chatid, message });
  });
};
module.exports = { initIO };
