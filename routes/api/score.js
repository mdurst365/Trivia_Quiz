const router = require("express").Router();
const scoreController = require("../../controllers/scoreController");

// get all scores and create score
router.route("/")
  .get(scoreController.getAll)
  .post(scoreController.create);

// get score by id and update score
router
  .route("/:id")
  .get(scoreController.getById)
  .put(scoreController.update)

module.exports = router;