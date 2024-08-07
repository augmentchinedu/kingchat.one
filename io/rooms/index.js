const initRoomsSocket = (user) => {
  user.on("disconnect", async () => {
    console.log(user.uid, "has Disconnected");
  });

  user.on('send',()=>{
    
  })
};

module.exports = { initRoomsSocket };
