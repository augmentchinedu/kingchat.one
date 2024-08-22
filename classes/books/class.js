const { genres } = require("./data");

class Books {}
let books = 0;

const setBooks = (count) => (books = count);
class BookStore {
  constructor() {
    this.genres = [];

    genres.forEach(({ name, count }) => {
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
        count,
      });
    });
  }

  books = books;
}
module.exports = { Books, BookStore, setBooks };
