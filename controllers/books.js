// const { BookStore } = require("../classes");
const { Book } = require("../db");

const getGenre = async (req, res) => {
  const genre = req.query.genre;

  try {
    let books = await Book.find({ genres: { $in: [genre] } });
    res.send(books);
  } catch (err) {
    res.send(err);
  }
};

module.exports = { getGenre };
