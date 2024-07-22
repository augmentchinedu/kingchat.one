const chats = [
  {
    name: "Amadi",
    username: "Amadi",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
    chatid: "",
  },
  {
    name: "Name",
    username: "Username",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
  },
  {
    name: "Name",
    username: "Username",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
  },
  {
    name: "Name",
    username: "Username",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
  },
  {
    name: "Name",
    username: "Username",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
  },
  {
    name: "Name",
    username: "Username",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
  },
  {
    name: "Name",
    username: "Username",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
  },
  {
    name: "Name",
    username: "Username",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
  },
  {
    name: "Name",
    username: "Username",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
  },
  {
    name: "Name",
    username: "Username",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
  },
  {
    name: "Name",
    username: "Username",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
  },
  {
    name: "Name",
    username: "Username",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
  },
  {
    name: "Name",
    username: "Username",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
  },
  {
    name: "Name",
    username: "Username",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
  },
  {
    name: "Name",
    username: "Username",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
  },
  {
    name: "Name",
    username: "Username",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
  },
  {
    name: "Name",
    username: "Username",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
  },
  {
    name: "Name",
    username: "Username",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
  },
  {
    name: "Name",
    username: "Username",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
  },
  {
    name: "Name",
    username: "Username",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
  },
  {
    name: "Name",
    username: "Username",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
  },
  {
    name: "Name",
    username: "Username",
    avatar: "https://ui-avatars.com/api/?background=random",
    message: "i am a boy",
  },
];

const messages = [
  {
    username: "augment",
    displayName: "Augment Chinedu",
    msg: {
      text: "How far",
    },
  },
  {
    username: "augment",
    displayName: "Augment Chinedu",
    msg: {
      text: "I Dey",
    },
  },
  {
    username: "delight",
    displayName: "Ebube Delight",
    msg: {
      text: "How Your Side",
    },
  },
];

class Chat {
  constructor(room) {
    Object.assign(this, room);

    this.messages = messages;
  }

  static getAllChats(id) {
    console.log("Sorting Chats By User ID.", id);
    return chats;
  }

  static enterRoom(id, roomID) {
    console.log("Accessing Room " + id);

    let room = rooms.find((room) => room.id == roomID);
    console.log(room);
    return room;
  }
}

module.exports = { Chat };
