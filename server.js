// Dependencies
const express = require("express");
const path = require("path");

// Sets up the Express App
var app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts listening
app.listen(PORT, function() {
  console.log("http://localhost:" + PORT);
});
