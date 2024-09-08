const { User, Post } = require("../db");

const xPost = async (req, res) => {
  const post = req.body;

  if (post.username == "_augment") post.username = "augment";

  const users = await User.find({ username: post.username });
  const user = users[0];
  if (user) {
    try {
      const tweets = await Post.find({
        authors: { $in: [user._id] },
        text: post.text,
      });
      
      if (tweets.length == 0) {
        let data = {
          authors: [user._id],
          text: post.text,
          createdAt: new Date(post.time),
        };

        if (post.media) data.media = post.media;

        const newPost = await Post.create(data);

        await newPost.save();
      }
    } catch (err) {
      console.error(err);
    }
  }

  res.send(true);
};

module.exports = { xPost };
