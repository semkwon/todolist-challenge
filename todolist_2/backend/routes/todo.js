const express = require("express");
let todoData = require("../todoData.json");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(todoData);

  res.json(todoData);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (parseInt(id) >= todoData.length) {
    return res.status(400).json({ error: "존재하지 않는 ID입니다." });
  }

  res.json(todoData[parseInt(id)]);
});

module.exports = router;
