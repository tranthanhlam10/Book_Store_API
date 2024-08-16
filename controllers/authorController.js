//const { model } = require("mongoose");

const { Author, Book } = require("../model/model");

const authorController = {
  // add author
  // Mindset dang hieu khong phai la ham, ma addAuthor la thuoc tinh cua doi tuong nay -> Nghien cuu them mo hinh mvc trng JS
  addAuthor: async (req, res) => {
    try {
        const newAuthor = new Author(req.body);
        const saveAuthor = await newAuthor.save();
        res.status(201).json(saveAuthor);
        res.body = saveAuthor;  
    } catch (error) {
        res.status(500).json(error);
    }
  },



  // get all author
  getAllAuthor: async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json(authors);  
       } catch (error) {
        res.status(500).json(err);
    }
  },

  getAnAuthor: async (req, res) => {
    try {
        const author = await Author.findById(req.params.id).populate("books"); 
        res.status(200).json(author);  
    } catch (error) {
        res.status(500).json(err);
    }
  }   
};

module.exports = authorController;
