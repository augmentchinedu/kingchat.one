const books = require("../classes/books");

async function init() {
  await books.init();
}
module.exports = { init };
