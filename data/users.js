let { getIO } = require("../io/io");

let users = new Proxy([], {
  set(array, prop, value) {
    console.log("xxx " + value.uid);
    let io = getIO();

    array[prop] = value;
    if (prop !== "length") {
      let profiles = [];

      array.forEach(({ profile }) => profiles.push(profile));
      console.log("Profiles:", profiles);
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
  console.log(user.uid, "Added");
};
const addAnonymous = (user) => {
  anonymous.push(user);
};
const setUsers = (newUsers) => {
  console.log(newUsers, "newUsers");
  users = newUsers;
  console.log("New Users made", users.length, newUsers.length);
};
const setAnonymous = (anons) => (anonymous = anons);

module.exports = {
  getUsers,
  getAnonymous,
  addUser,
  addAnonymous,
  setUsers,
  setAnonymous,
};
