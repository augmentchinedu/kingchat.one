const { genres } = require("./data");

class Book {}

class Books {}

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
}

module.exports = { Book, Books, BookStore };
