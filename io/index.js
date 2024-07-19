const initIO = (app) => {
  // App
  app.on("connection", () => {
    console.log("Someone Just Connected");
  });

  //   Rooms
  const rooms = app.of("/rooms");

  rooms.on("connection", (socket) => {
    console.log("Rooms", socket.id);
  });
};

module.exports = { initIO };
