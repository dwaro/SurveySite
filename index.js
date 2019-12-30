const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express(); // create express app

// create new instance of Google Passport Strategy
// passport.use --> telling passport that there is a new strategy available
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("access token:", accessToken);
      console.log("refresh token:", refreshToken);
      console.log("profile:", profile);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"] //asking google for access to user's profile and email info
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));

// create first route handler
// this was really just a test route handler
// app.get("/", (req, res) => {
//   res.send({ hi: "there" });
// });

/*  instructs express to tell Node that it wants to listen for incoming traffic
 *  on PORT. Node is actually the one listening for the request. If process.env.PORT
 *  exists, then we will use that (i.e. the port Heroku tells us), otherwise,
 *  we're probably working on development and will just use local port 5000.
 */
const PORT = process.env.PORT || 5000;
app.listen(PORT); // port 5000... i.e. localhost:5000
