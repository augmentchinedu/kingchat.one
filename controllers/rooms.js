const { Room } = require("../classes");

const enterRoom = async (req, res) => {
  let uid = req.query.uid;
  let roomID = req.query.roomID;

  const room = Room.enterRoom(uid, roomID);
  res.send(room);
};

module.exports = { enterRoom };
