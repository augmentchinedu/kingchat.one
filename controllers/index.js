const { auth } = require("../firebase");
const { User, Chat } = require("../db");
const { Room } = require("../classes");

const functions = require("../functions");

const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId();

const verifyEmailAddress = async (uid) => {
  await auth.updateUser(uid, {
    emailVerified: true,
  });

  return;
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

  users.sort((a, b) => {
    return a.lastSignInTime - b.lastSignInTime;
  });
  return users;
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
    console.log(uid);
    try {
      let user = await User.findById(uid);
      user = user.toObject();

      // Get Chats
      let chats = await Chat.getAllChats(user.chats, uid);

      delete user.chats;
      res.send({ user, chats });
    } catch (error) {
      console.log("x", error.message);
      res.send(error.message);
    }
  },

  getProfile: async (req, res) => {
    const uid = req.query.uid;
    try {
      const user = await User.findById(uid);
      console.log(user);
      const profile = user.profile;
      res.send(profile);
    } catch (error) {
      console.log(error);
    }
  },
  signup: async (req, res) => {
    try {
      let userRecord = await auth.createUser({
        email: req.body.email,
        emailVerified: false,
        displayName: req.body.name,
        password: req.body.password,
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
        chats: [],
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
    try {
      await auth.updateUser(uid, {
        password,
      });
      res.send(true);
    } catch (error) {
      console.log(error.message);
      res.send(false);
    }
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

  generateRecoveryCode: async (req, res) => {
    const id = req.body.id;
    const code = Math.floor(100000 + Math.random() * 900000);

    let user;

    // Confirm if ID is a Username or Email
    if (id.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}$/)) {
      // This block is for Email
      user = await User.findOne({ email: id });
    } else {
      // This block is for Username
      user = await User.findOne({ username: id });
    }

    if (user) {
      user.auth.otp = code;
      await user.save();
      let isRecoveryCodeSent = await functions.sendRecoveryCode(
        user.email,
        code
      );

      if (isRecoveryCodeSent)
        res.send({ email: user.email, uid: user._id, username: user.username });
      else res.send(false);
    } else res.send(false);
  },

  // App
  getApp: async (req, res) => {
    const id = req.query.id;

    let rooms, recent;

    rooms = Room.getAllRooms(id);

    const app = {
      recent: await getRecentUsers(),
      rooms,
    };

    res.send(app);
  },

  // Rooms
  enterRoom: async (req, res) => {
    let id = req.query.uid;
    let roomID = req.query.roomID;

    const room = Room.enterRoom(id, roomID);
    res.send(room);
  },
};
