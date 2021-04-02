const router = require("express").Router();
const userController = require("../../controllers/userController");

// get all users and create user route
router.route("/")
  .get(userController.getAll)
  .post(userController.create);

// get user by id route
router
  .route("/:id")
  .get(userController.getById)

router
  .route('/register')
  .post(userController.create);

router
  .route('/login')
  .post(userController.create);

router
  .route('/authenticated')
  .post(userController.create);

module.exports = router;