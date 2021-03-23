const router = require("express").Router();
const userRoutes = require("./user");
const quizRoutes = require("./quiz");

// user routes
router.use("/user", userRoutes);
// quiz routes
router.use("/quiz", quizRoutes);

module.exports = router;