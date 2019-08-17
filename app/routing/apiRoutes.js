// Load Data

const tableData = require("../data/friends");

// ROUTING

module.exports = app => {
  // API GET Requests

  app.get("/api/friends", (req, res) => {
    res.json(tableData);
  });

  app.post("/api/friends", (req, res) => {
 
    tableData.push(req.body);
    res.json(true);
  });
};
