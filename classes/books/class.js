const { genres } = require("./data");

class Book {}

class Books {}

class BookStore {
  constructor() {
    this.genres = genres;
  }
}

module.exports = { Book, Books, BookStore };
