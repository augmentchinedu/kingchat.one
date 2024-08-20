const { genres } = require("./data");
const { Book } = require("../../db");

class Books {}
let books = 0;

(async () => (books = await Book.countDocuments({})))();
class BookStore {
  constructor() {
    this.genres = [];

    genres.forEach((name) => {
      let id = name
        .trim()
        .toLowerCase()
        .replaceAll("  ", " ")
        .replaceAll("'", "")
        .replaceAll(" ", "-")
        .replaceAll("/", "-");
      let photoURL = `https://storage.googleapis.com/kingchatone.appspot.com/books/${id}.jpeg`;
      this.genres.push({
        id,
        name,
        photoURL,
      });
    });
  }

  books = books;
}
module.exports = { Book, Books, BookStore };
