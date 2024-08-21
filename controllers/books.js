// const { BookStore } = require("../classes");
const { Book } = require("../db");

const getGenre = async (req, res) => {
  const genre = req.query.genre;

  try {
    let books = await Book.find({ genres: { $in: [genre] } });
    if (books.length > 0) res.send(books);
    else res.status(500).json({ message: "No Data Found" });
  } catch (err) {
    res.send(err);
  }
};

const getBook = async (req, res) => {
  const bookID = req.query.bookID;

  try {
    const book = await Book.findById(bookID);
    if (book) res.send(book);
    else res.send(null);
  } catch (err) {
    res.send(err);
  }
};

module.exports = { getGenre, getBook };
