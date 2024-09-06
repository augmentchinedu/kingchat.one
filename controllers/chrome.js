const { User, Post } = require("../db");

const xPost = async (req, res) => {
  const post = req.body;

  if (post.username == "_augment") post.username = "augment";

  const user = await User.find({ username: post.username });
  if (user) {
    const tweet = await Post.find({ author: user.uid, text: post.text });

    if (!tweet) {
      const newPost = await Post.create({
        authors: [user.uid],
        text: post.text,
        time: new Date(post.time),
      });

      await newPost.save();
    }
  }

  res.send(true);
};

module.exports = { xPost };
