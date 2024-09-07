let rooms = [];

const roomTypes = [
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

const chatRoomUsersLimit = 12;
class Room {
  constructor(room) {
    Object.assign(this, room);

    this.units = [new Unit(messages)];
  }

  static getAllAccessibleRooms(id) {
    id; //
    let roomTypes = [];

    rooms.forEach(({ id, name, imgURL, desc }) =>
      roomTypes.push({ id, name, imgURL, desc })
    );
    return roomTypes;
  }

  static enterRoom(uid, roomID) {
    let room = Object.assign(
      {},
      rooms.find((room) => room.id == roomID)
    );
    console.log(room, room.units);

    for (let [i, unit] of room.units.entries()) {
      if (unit.users.length < chatRoomUsersLimit) {
        room.number = i + 1;
        room.messages = unit.messages;
        delete room.units;
        return room;
      }
    }
  }
}

class Unit {
  constructor(messages) {
    this.users = [];
    this.messages = messages;
  }
}

roomTypes.forEach((info) => rooms.push(new Room(info)));

module.exports = { Room, roomTypes, rooms };
