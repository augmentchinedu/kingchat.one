const { Books, BookStore } = require("./class");
const { Book } = require("../../db");
const { genres } = require("./data");
const { setBooks } = require("./class");

async function init() {
  try {
    const books = await Book.countDocuments({});
    setBooks(books);
  } catch (err) {
    console.log(err);
  }

  for (let [i, genre] of genres.entries()) {
    try {
      const count = await Book.countDocuments({ genres: { $in: [genre] } });
      genres[i] = { name: genre, count };
    } catch (err) {
      console.log(err);
    }
  }
  console.log("Books Counted");
}

module.exports = { BookStore, init };
