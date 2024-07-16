const { auth } = require("../firebase");
const { User } = require("../db/models");
const functions = require("../functions");

const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId();

const verifyEmailAddress = async (uid) => {
  await auth.updateUser(uid, {
    emailVerified: true,
  });

  return;
};

module.exports = {
  login: async (req, res) => {
    const data = { username: req.body.username, password: req.body.password };

    let result = await User.find({ username: data.username });
    if (result.length == 0) res.status(400).send("auth/invalid-credential");
    else {
      const user = {
        email: result[0].email,
      };
      console.log(user);
      res.send(user);
    }
  },

  getUser: async (req, res) => {
    let uid = req.body.uid;
    let user = await auth.getUser(uid);
    let userData = await User.findById(user.uid);
    userData = userData.toObject();
    user = { ...user, ...userData };

    res.send(user);
  },

  signup: async (req, res) => {
    try {
      let userRecord = await auth.createUser({
        email: req.body.email,
        emailVerified: false,
        displayName: req.body.name,
        password: "12345678",
        photoURL:
          "https://storage.googleapis.com/kingchatone.appspot.com/app/avatar.png",
      });

      res.send(userRecord);

      const user = new User({
        _id: userRecord.uid,
        displayName: req.body.name,
        email: req.body.email,
        username: uid.rnd(),
        dob: new Date(`${req.body.month} ${req.body.day} ${req.body.year}`),
        auth: {
          otp: "",
        },
      });

      user.save().then(() => {
        functions.authenticate(user);
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },

  verifyEmail: async (req, res) => {
    try {
      const user = await auth.getUserByEmail(req.body.email);
      res.send(user);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
  verifyUsername: async (req, res) => {
    const username = req.body.username;

    let users = await User.find({ username });
    console.log(users);

    if (users.length == 0) res.send(true);
    else res.send(false);
  },
  verifyOTP: async (req, res) => {
    let data = req.body;
    let result = await User.find({ _id: data.uid });
    let user = result[0];

    if (user.auth.otp == data.code) {
      let newUserObj = user.toObject();
      delete newUserObj.auth;

      user.overwrite(newUserObj);
      await user.save();
      verifyEmailAddress(data.uid);

      res.send(true);
    } else res.send(false);
  },

  createPassword: async (req, res) => {
    const uid = req.body.uid;
    const password = req.body.password;
    await auth.updateUser(uid, {
      password,
    });
    res.send(true);
  },

  updateProfilePhoto: async (req, res) => {
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
  },

  updateUsername: async (req, res) => {
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
  },
};
