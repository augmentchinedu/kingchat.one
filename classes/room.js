let rooms = [];

let roomTypes = [
  {
    name: "General",
    desc: "A general chat room for all",
    imgURL:
      "https://storage.googleapis.com/kingchatone.appspot.com/app/rooms/general.jpg",
    id: "general",
  },
  {
    name: "Flirt Zone",
    desc: "It all starts with a flirt! Are you looking for love, a new friend or a perfect companion?",
    imgURL:
      "https://storage.googleapis.com/kingchatone.appspot.com/app/rooms/flirt-zone.jpg",
    id: "flirt-zone",
  },
  {
    name: "Love",
    desc: "Discover a world where true love isn't just a fairy tale",
    imgURL:
      "https://storage.googleapis.com/kingchatone.appspot.com/app/rooms/love.jpg",
    id: "love",
  },
  {
    name: "Singles",
    desc: " For 17+ ONLY. This room is NOT for dating",
    imgURL:
      "https://storage.googleapis.com/kingchatone.appspot.com/app/rooms/singles.jpg",
    id: "singles",
  },
  {
    name: "Movies",
    desc: "Talk about, critique, and share thoughts and reactions to films and television",
    imgURL:
      "https://storage.googleapis.com/kingchatone.appspot.com/app/rooms/movies.jpg",
    id: "movies",
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

class Room {
  constructor(room) {
    Object.assign(this, room);

    this.messages = messages;
  }

  static getAllRooms(id) {
    console.log("Sorting Rooms By User ID.", id);
    return { active: null, all: rooms };
  }

  static enterRoom(id, roomID) {
    console.log("Accessing Room " + id);

    let room = rooms.find((room) => room.id == roomID);
    console.log(room);
    return room;
  }
}

roomTypes.forEach((info) => {
  const room = new Room(info);
  room.number = 1;
  rooms.push(room);
});

module.exports = { Room };
