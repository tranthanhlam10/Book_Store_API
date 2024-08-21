const { Author, Book } = require("../model/model");

const bookController = {
  // req, rés la 2 object cua express
  addABook: async (req, res) => {
    try {
      const addBook = new Book(req.body);
      const saveBook = await addBook.save();
      if (res.body.author) {
        const author = Author.find({ _id: res.body.author });
        await author.updateOne({ $push: { books: saveBook._id } });
      }

      await res.status(201).json(saveBook);
      res.body = saveBook;
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAllBook: async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getABook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id).populate("author");
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      await book.updateOne({ $set: req.body });
      res.status(201).json("Updated");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteBook: async (req, res) => {
    try {
      await Author.updateMany(
        { books: req.params.id }, // Tìm các tác giả có sách với ID này
        { $pull: { books: req.params.id } } // Loại bỏ sách đó khỏi mảng "books" của tác giả
      );

      await Book.deleteOne({ _id: req.params.id });
      res.status(200).json("Deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = bookController;
