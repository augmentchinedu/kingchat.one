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

let anonymous = new Proxy([],{})

module.exports = {users, anonymous};
