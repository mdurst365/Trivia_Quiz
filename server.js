require("dotenv").config();

const passport = require("passport");

app.use(passport.initialize());
// Passport config
passport.use( require("./config/jwtPassportStrategy") );

// add before the catch all route
app.use( "/api", require("./routes/authentication") );