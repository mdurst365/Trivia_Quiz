const db = require("../models");

// score table methods
module.exports = {
    getAll: (req, res) => {
        db.Score
            .find({})
            .then(scoreModel => res.json(scoreModel))
            .catch(err => res.status(422).json(err));
    },
    getById: (req, res) => {
        db.Score
            .findById(req.params.id)
            .then(scoreModel => res.json(scoreModel))
            .catch(err => res.status(422).json(err));
    },
    create: ({ body }, res) => {
        db.Score
            .create(body)
            .then(scoreModel => res.json(scoreModel))
            .catch(err => res.status(422).json(err));
    },
    update: (req, res) => {
        db.Score
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(scoreModel => res.json(scoreModel))
            .catch(err => res.status(422).json(err));
    }
};
