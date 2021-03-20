const db = require("../models");

module.exports = function (app) {

  app.get("/user", (req, res) => {
    db.User.find({})
      .then((userDB) => {
        res.json(userDB);
      })
      .catch((err) => {
        if (err) {
          throw (err);
        } else {
          res.status(400);
        }
      });
  });

  app.post("/user", ({
    body
  }, res) => {
    db.User.create(body)
      .then((userDB) => {
        res.json(userDB);
      })
      .catch((err) => {
        if (err) {
          throw (err);
        } else {
          res.status(400);
        }
      });
  });


};
