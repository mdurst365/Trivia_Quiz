const db = require("../models");

// user table controller methods
module.exports = {
    getAll: (req, res) => {
        db.User
            .find({})
            .sort({ created_on: -1 })
            .then(userModel => res.json(userModel))
            .catch(err => res.status(422).json(err));
    },
    getById: (req, res) => {
        db.User
            .findById(req.params.id)
            .then(userModel => res.json(userModel))
            .catch(err => res.status(422).json(err));
    },
    create: ({ body }, res) => {
        db.User
            .create(body)
            .then(userModel => res.json(userModel))
            .catch(err => res.status(422).json(err));
    }
};