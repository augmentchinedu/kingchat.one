const auth = require("./auth");
const app = require("./app");
const user = require("./user");
const books = require("./books");
const rooms = require("./rooms");

module.exports = {
  ...auth,
  ...app,
  ...user,
  ...books,
  ...rooms,
};
