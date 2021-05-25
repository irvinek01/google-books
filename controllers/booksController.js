const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Book.find(req.query)
      .then((book) => res.json(book))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Book.create(req.body)
      .then((book) => res.json(book))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Book.deleteOne({ id: req.params.id })
      .then((book) => res.json(book))
      .catch((err) => res.status(422).json(err));
  },
};
