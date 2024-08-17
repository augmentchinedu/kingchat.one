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
        .replace("  ", " ")
        .replace("'", "")
        .replace(" ", "-")
        .replace("/", "-");
      this.genres.push({
        id,
        name,
      });
    });
  }
}

module.exports = { Book, Books, BookStore };
