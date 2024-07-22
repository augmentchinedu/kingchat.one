const { Chat } = require("../classes");
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

  // On Each Message Sent
  user.on("message", (payload) => {
    const { chatid, message } = payload;

    console.log(chatid, message);

    let chat = {
      chatid,
      name: "XXXXX",
      username: "UUUUU",
      message,

      lastMessage: message,
      messages: [
        {
          text: message,
        },
      ],
    };
    chat = new Chat(chat);
    user.emit("message", chat);
  });
  console.log("Someone Just Connected");
};
module.exports = { initIO };
