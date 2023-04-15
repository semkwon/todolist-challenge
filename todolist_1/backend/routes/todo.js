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
  const { title, desc } = req.body;

  todoData.push({ title, desc, idDone: false });
  console.log(todoData);

  res.json(todoData);
});

module.exports = router;
