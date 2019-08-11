// DEPENDENCIES
const path = require("path");

// ROUTING

module.exports = app => {
  // HTML GET Requests
  

  app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });


  // default
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
