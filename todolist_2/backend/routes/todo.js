const express = require("express");
let todoData = require("../todoData.json");
const router = express.Router();

// 전체 todolist 조회
router.get("/", (req, res) => {
  console.log(todoData);

  res.json(todoData);
});

// 특정 todolist 조회
router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (parseInt(id) >= todoData.length) {
    return res.status(400).json({ error: "존재하지 않는 ID입니다." });
  }

  res.json(todoData[parseInt(id)]);
});

// todolist 생성
router.post("/", (req, res) => {
  const { title, desc } = req.body;

  if (!title || !desc) {
    return res
      .status(400)
      .json({ error: "title과 desc을 모두 입력해야 합니다." });
  }

  todoData.push({ title, desc, isDone: false });

  console.log(todoData);
  res.json(todoData);
});

// todolist 수정 // error - 1. 존재하지 않는 ID 2. 둘 다 입력 안했을 때
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, desc } = req.body;

  if (parseInt(id) >= todoData.length) {
    return res.status(400).json({ error: "존재하지 않는 ID입니다" });
  }

  if (!title && !desc) {
    return res.status(400).json({ error: "title 또는 desc을 입력하세요." });
  }

  todoData[parseInt(id)] = {
    title: title ? title : todoData[parseInt(id)].title,
    desc: desc ? desc : todoData[parseInt(id)].desc,
    isDone: todoData[parseInt(id)].isDone,
  };

  console.log(todoData);
  res.json(todoData);
});

module.exports = router;
