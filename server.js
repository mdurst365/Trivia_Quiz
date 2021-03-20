require("dotenv").config();

const passport = require("passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(passport.initialize());
// Passport config
passport.use( require("./config/jwtPassportStrategy") );