require("dotenv").config();

const passport = require("passport");

app.use(passport.initialize());
// Passport config
passport.use( require("./config/jwtPassportStrategy") );

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// authentication
app.use( "/api", require("./routes/authentication") );


app.use(passport.initialize());
// Passport config
passport.use( require("./config/jwtPassportStrategy") );