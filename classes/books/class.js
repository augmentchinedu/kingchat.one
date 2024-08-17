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
      this.genres.push({
        id,
        name,
      });
    });
  }
}

module.exports = { Book, Books, BookStore };
