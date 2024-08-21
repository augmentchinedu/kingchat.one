const { User, Chat } = require("../db");
const { Room, BookStore } = require("../classes");
const { services } = require("../data");

const getUser = async (req, res) => {
  let uid = req.body.uid;
  console.log(uid);
  try {
    let user = await User.findById(uid);
    user = user.toObject();

    // Get Chats
    let chats = await Chat.getAllChats(user.chats, uid);

    delete user.chats;
    res.send({ user, chats });
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

const getApp = async (req, res) => {
  const id = req.query.id;

  let rooms, recent;

  rooms = { active: null, all: Room.getAllAccessibleRooms(id) };
  recent = await getRecentUsers();

  console.log(services);
  const app = {
    services,
    recent,
    rooms,
    bookStore: new BookStore(),
  };

  res.send(app);
};

const getProfile = async (req, res) => {
  const uid = req.query.uid;
  try {
    const user = await User.findById(uid);
    console.log(user);
    const profile = user.profile;
    res.send(profile);
  } catch (error) {
    console.log(error);
  }
};

const getRecentUsers = async () => {
  console.log("Getting Recent Users");
  let users = await User.find();

  for (let [index, user] of users.entries()) {
    user = user.toObject();

    delete user.email;
    delete user.chats;

    users[index] = { profile: { ...user } };
  }

  users.sort((a, b) => b.profile.lastSeen - a.profile.lastSeen);
  return users;
};

module.exports = { getUser, getApp, getProfile, getRecentUsers };
