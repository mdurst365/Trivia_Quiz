const router = require("express").Router();
const userRoutes = require("./user");
const quizRoutes = require("./quiz");
const scoreRoutes = require("./score");

// user routes
router.use("/user", userRoutes);

// quiz routes
router.use("/quiz", quizRoutes);

// score routes
router.use("/score", scoreRoutes);

module.exports = router;