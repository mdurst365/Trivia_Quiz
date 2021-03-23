const router = require("express").Router();
const quizController = require("../../controllers/quizController");

// get all quizes and create quiz route
router.route("/")
  .get(quizController.getAll)
  .post(quizController.create);

// get quiz by id route
router
  .route("/:id")
  .get(quizController.getById)

module.exports = router;