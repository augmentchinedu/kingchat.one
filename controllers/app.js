const { User, Chat, Post } = require("../db");
const { Room, BookStore } = require("../classes");
const { services } = require("../data");

const getAuthor = async (uid) => {
  const author = await User.findById(uid);
  return author.profile;
};

const getAnonymousProfile = (id) => ({
  _id: id,
  displayName: "Anonymous " + id.split("anonymous-")[1],
  photoURL:
    "https://storage.googleapis.com/kingchatone.appspot.com/users/avatars/anonymous.jpeg",
});

const getUser = async (req, res) => {
  let uid = req.body.uid;
  uid = uid.substring(0, 9) == "anonymous" ? "anonymous" : uid;

  try {
    let user = await User.findById(uid);
    user = user.toObject();

    // Get Chats
    const chats = await Chat.getAllChats(user.chats, uid);
    let posts = [];

    const latestPosts = await Post.find({}).sort({ time: -1 });

    for (let [i, post] of latestPosts.entries()) {
      post = post.toObject();
      const { username, displayName, photoURL } = await getAuthor(post.author);
      posts[i] = {
        author: { username, displayName, photoURL },
        text: post.text,
        createdAt: post.createdAt.getTime(),
      };
    }

    delete user.chats;

    res.send({ user, chats, posts });
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
  console.log(uid);

  if (uid.substring(0, 9) == "anonymous") {
    const profile = getAnonymousProfile(uid);
    res.send(profile);
    return;
  }

  try {
    const user = await User.findById(uid);
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

const getUserPage = async (req, res) => {
  const username = req.query.username;

  User.findOne({ username })
    .then((user) => {
      if (!user) return res.send(null);
      let page = { profile: user.profile };
      res.send(page);
    })
    .catch((err) => console.error(err));
};

module.exports = { getUser, getApp, getProfile, getRecentUsers, getUserPage };
