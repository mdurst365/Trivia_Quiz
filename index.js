const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

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

// Link API Routes here
app.use(routes);

// Mongo DB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trivia_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log("🚀  Server now on port", PORT, "👻 React App on Port 3000");
});