const { genres } = require("./data");
const { Book } = require("../../db");

class Books {}
let books = 0;

(async () => {
  try {
    books = await Book.countDocuments({});
  } catch (err) {
    console.log(err);
  }

  for (let [i, genre] of genres.entries()) {
    try {
      const count = await Book.countDocuments({ genres: { $in: [genre] } });
      genres[i] = { name: genre, count };
      console.log(genre, count);
    } catch (err) {
      console.log(err);
    }
  }
})();
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
    console.log(this.genres);
  }

  books = books;
}
module.exports = { Book, Books, BookStore };
