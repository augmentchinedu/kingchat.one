const initRoomsSocket = (user) => {
  user.on("disconnect", async () => {
    console.info(user.uid, "has Disconnected");
  });

  user.on("send", () => {});
};

module.exports = { initRoomsSocket };
