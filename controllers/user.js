const { auth } = require("../firebase");
const { User, Post } = require("../db");

const updateUsername = async (req, res) => {
  const uid = req.body.uid;
  const username = req.body.username;
  try {
    let user = await User.findById(uid);
    user.username = username;
    await user.save();

    res.send(true);
  } catch (error) {
    res.send(error.message);
  }
};

const updateProfilePhoto = async (req, res) => {
  let uid = req.body.uid;
  let imgURL = req.body.imgURL;

  try {
    await auth.updateUser(uid, {
      photoURL: imgURL,
    });
    res.send(true);
  } catch (error) {
    res.send(error.message);
  }
};

const createPost = async (req, res) => {
  const post = req.body;

  const newPost = await Post.create({
    author: post.author,
    text: post.text,
    time: new Date(post.time),
  });

  await newPost.save();

  res.send(true);
};

module.exports = { updateUsername, updateProfilePhoto, createPost };
