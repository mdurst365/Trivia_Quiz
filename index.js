const express = require("express");
const mongoose = require("mongoose");

// Port
const PORT = process.env.PORT || 3001;

// Setup Express server
const app = express();

app.use([
    express.urlencoded({ extended: true }),
    express.json()
]);

// Serve static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Mongo DB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trivia_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Link API Routes here
require("./routes/api_routes.js")(app);

app.listen(PORT, () => {
  console.log("🚀  Server now on port", PORT, "👻 React App on Port 3000");
});