const { auth } = require("../firebase");
const { User } = require("../db");

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

module.exports = { updateUsername, updateProfilePhoto };
