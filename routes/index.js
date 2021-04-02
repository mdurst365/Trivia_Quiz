const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// api routes
router.use("/api", apiRoutes);

// If no routes are used send the react application=
router.use(function(req, res) {
     res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

module.exports = router;