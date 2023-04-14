const express = require("express");
let todoData = require("../todoData.json");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(todoData);

  res.json(todoData);
});

module.exports = router;
