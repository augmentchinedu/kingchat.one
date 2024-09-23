const { User, Chat, Post } = require("../db");
const { Room, BookStore } = require("../classes");
const { services } = require("../data");

const getAuthors = async (data) => {
  let authors = [];

  for (let uid of data) {
    const author = await User.findById(uid);
    authors.push(author.profile);
  }
  return authors;
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

    const latestPosts = await Post.find({}).sort({ createdAt: -1 });

    for (let [i, post] of latestPosts.entries()) {
      post = post.toObject();
      const authors = await getAuthors(post.authors);

      posts[i] = {
        authors,
        text: post.text,
        media: post.media,
        createdAt: post.createdAt.getTime(),
      };
    }

    posts.length = 20;

    delete user.chats;
    res.send({ user, chats, posts });
  } catch (error) {
    console.error(error.message);
    res.send(error.message);
  }
};

const getApp = async (req, res) => {
  const id = req.query.id;

  let rooms;

  rooms = { active: null, all: Room.getAllAccessibleRooms(id) };

  const app = {
    services,
    rooms,
    bookStore: new BookStore(),
  };

  res.send(app);
};

const getProfile = async (req, res) => {
  const uid = req.query.uid;

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
    console.error(error);
  }
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

module.exports = { getUser, getApp, getProfile, getUserPage };
