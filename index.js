const express = require("express"); // import express
const app = express(); // create express app

// create first route handler
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

/*  instructs express to tell Node that it wants to listen for incoming traffic
 *  on PORT. Node is actually the one listening for the request. If process.env.PORT
 *  exists, then we will use that (i.e. the port Heroku tells us), otherwise,
 *  we're probably working on development and will just use local port 5000.
 */
const PORT = process.env.PORT || 5000;
app.listen(PORT); // port 5000... i.e. localhost:5000
