const db = require("../models");

// quiz table methods
module.exports = {
  getAll: (req, res) => {
    db.Quiz
      .find({})
      .then(quizModel => res.json(quizModel))
      .catch(err => res.status(422).json(err));
  },
  getById: (req, res) => {
    db.Quiz
      .findById(req.params.id)
      .then(quizModel => res.json(quizModel))
      .catch(err => res.status(422).json(err));
  },
  create: ({ body }, res) => {
    db.Quiz
      .create(body)
      .then(quizModel => res.json(quizModel))
      .catch(err => res.status(422).json(err));
  }
};