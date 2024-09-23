const { Chat, User } = require("../../db");
let { getUsers, setUsers, getAnonymous, setAnonymous } = require("../../data");

const initUserSocket = (user) => {
  // On Disconnection
  user.on("disconnect", () => {
    let users;

    const uid = user.handshake.auth.uid;
    if (uid.substring(0, 9) == "anonymous") {
      users = getAnonymous();
      console.info("anonymous", users.length);
    } else users = getUsers();

    const userIndex = users.findIndex((socket) => socket.uid == user.uid);
    users.splice(userIndex, 1);

    if (uid.substring(0, 9) == "anonymous") {
      setAnonymous(users);
      console.info("anonymous", users.length);
    } else setUsers(users);
  });

  user.on("init", () => {
    // Initialize King Chat User
    let online = [];
    const users = getUsers();
    users.forEach(({ profile }) => online.push(profile));
    user.emit("online", { online });
  });

  // On Each Message Sent
  user.on("send", async (payload, res) => {
    await send(payload, res);
  });

  // On Each Message Sent To Service
  user.on("sendToService", async (payload, res) => {
    const chat = await send(payload, res);

    user.emit("message", await replyAsService(payload, chat));
  });

  // Update Reciepts
  user.on("reciept", async ({ uid, chatid, reciept }, res) => {
    let senderID = uid;
    let receiverID = chatid.split(uid).find((id) => id.length > 0);

    let chat = await Chat.findById(chatid);
    // Reciept Guards
    if (reciept.lastDelivered) {
      try {
        chat.meta[senderID].lastDelivered = reciept.lastDelivered;
        chat.markModified("meta");

        chat.save();
      } catch (error) {
        console.error(error);
      }
    }

    if (reciept.lastRead) {
      try {
        chat.meta[senderID].lastRead = reciept.lastRead;
        chat.markModified("meta");

        await chat.save();
      } catch (error) {
        console.error(error);
      }
    }

    // Update Sender
    res({ chatid, reciept });

    // Update Reciever
    let users;
    if (receiverID.substring(0, 9) == "anonymous") users = getAnonymous();
    else users = getUsers();
    const reciever = users.find((socket) => socket.uid == receiverID);
    if (reciever) reciever.emit("reciept", { chatid, reciept });
  });
};

// Send Message
async function send(payload, res) {
  let chat;

  const time = Date.now();
  const { chatid, uid } = payload;
  const message = { text: payload.message, time, sender: uid };

  chat = await Chat.findById(chatid);

  let senderID = uid;
  let receiverID = chatid.split(uid).find((id) => id.length > 0);

  let lastSent, lastRead;
  lastRead = lastSent = Date.now();

  // If Chat is New: Add ChatID to Users Chats
  if (!chat) {
    // Enter Chat Record To Users

    for (let uid of [senderID, receiverID]) {
      if (uid.substring(0, 9) !== "anonymous") {
        try {
          let user = await User.findById(uid);
          user.chats.push(chatid);
          user.save();
        } catch (err) {
          console.error(err);
        }
      }
    }

    // Create New Chat
    chat = new Chat({
      _id: chatid,
      meta: {
        [senderID]: {
          lastSent,
          lastDelivered: 0,
          lastRead: 0,
        },
        [receiverID]: {
          lastSent: 0,
          lastDelivered: 0,
          lastRead: 0,
        },
      },
      messages: [message],
    });
  }

  // If Chat Already Exists: Update.
  else {
    // Update Sent Status
    chat.meta[senderID].lastSent = lastSent;
    chat.meta[senderID].lastRead = lastRead;
    chat.markModified("meta");

    // Add New Message
    chat.messages.unshift(message);
  }

  await chat.save();

  // Update Sender
  res(chatid, { message, reciept: { lastSent, lastRead } });

  // Update Reciever
  const users = getUsers();
  const reciever = users.find((socket) => socket.uid == receiverID);
  if (reciever) reciever.emit("message", { chatid, message });

  return chat;
}

async function replyAsService({ chatid, uid }, chat) {
  const service = chatid.split(uid).find((id) => id.length > 0);

  const message = {
    text: "I received your message. This is an automated response. I dont know what to say",
    time: Date.now(),
    sender: service,
  };

  let lastSent, lastRead;
  lastRead = lastSent = Date.now();

  chat.meta[service].lastSent = lastSent;
  chat.meta[service].lastRead = lastRead;
  chat.markModified("meta");

  // Add New Message
  chat.messages.unshift(message);

  await chat.save();

  const users = getUsers();
  const sender = users.find((socket) => socket.uid == service);

  if (sender)
    sender.emit("message", {
      chatid,
      message,
      reciept: { lastSent, lastRead },
    });

  return { chatid, message };
}

module.exports = { initUserSocket };
