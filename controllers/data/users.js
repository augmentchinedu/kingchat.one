let { getIO } = require("../io/io");

let users = new Proxy([], {
  set(array, prop, value) {
    let io = getIO();

    array[prop] = value;
    if (prop !== "length") {
      let profiles = [];

      array.forEach(({ profile }) => profiles.push(profile));
      io.emit("online", { online: profiles });
    }

    return true;
  },
});

let anonymous = new Proxy([], {});

const getUsers = () => {
  return users;
};
const getAnonymous = () => anonymous;

const addUser = (user) => {
  users.push(user);
};

const addAnonymous = (user) => {
  anonymous.push(user);
};

const setUsers = (newUsers) => (users = newUsers);
const setAnonymous = (anons) => (anonymous = anons);

module.exports = {
  getUsers,
  getAnonymous,
  addUser,
  addAnonymous,
  setUsers,
  setAnonymous,
};
