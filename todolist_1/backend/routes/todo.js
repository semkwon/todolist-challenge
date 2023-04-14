const express = require("express");
let todoData = require("../todoData.json");

const router = express.Router();

// todolist 전체 조회
router.get("/", (req, res) => {
  console.log(todoData);

  res.json(todoData);
});

// todolist 생성
router.post("/", (req, res) => {
  console.log(req.body);
  res.send("임시로 투두생성");
});

module.exports = router;
