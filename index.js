const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/user");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express(); // create express app

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days, but expressed in milliseconds
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

/*  instructs express to tell Node that it wants to listen for incoming traffic
 *  on PORT. Node is actually the one listening for the request. If process.env.PORT
 *  exists, then we will use that (i.e. the port Heroku tells us), otherwise,
 *  we're probably working on development and will just use local port 5000.
 */
const PORT = process.env.PORT || 5000;
app.listen(PORT); // port 5000... i.e. localhost:5000
