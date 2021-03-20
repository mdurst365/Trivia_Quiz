const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes will go here as they are needed


// If no routes are used send the react application

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

module.exports = router;