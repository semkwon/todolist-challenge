const express = require("express");
let todoData = require("../todoData.json");

const router = express.Router();

// todolist 전체 조회
router.get("/", (req, res) => {
  console.log(todoData);

  res.json(todoData);
});

// 특정 todolist 저회
router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (parseInt(id) >= todoData.length) {
    res.status(400).json({ error: "존재하지 않는 Id입니다." });
  }

  console.log(todoData[parseInt(id)]);
  res.json(todoData[parseInt(id)]);
});

// todolist 생성
router.post("/", (req, res) => {
  const { title, desc } = req.body;

  if (!title || !desc) {
    res.status(400).json({ error: "title과 desc 모두 입력해야 합니다." });
  }

  todoData.push({ title, desc, idDone: false });
  console.log(todoData);

  res.json(todoData);
});

// todo 수정(update)
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, desc } = req.body;

  if (parseInt(id) >= todoData.length) {
    res.status(400).json({ error: "수정할 수 없는 ID 입니다." });
  }

  if (!title && !desc) {
    res.status(400).json({ erro: "title or desc 둘 중 하나는 있어야 합니다." });
  }

  todoData[parseInt(id)] = {
    title: title ? title : todoData[parseInt(id)].title,
    desc: desc ? desc : todoData[parseInt(id)].desc,
    isDone: todoData[parseInt(id)].isDone,
  };

  console.log(todoData);
  res.json(todoData);
});

// todolist 완료 여부
router.put("/done/:id", (req, res) => {
  const { id } = req.params;

  if (parseInt(id) >= todoData.length) {
    res.status(400).json({ error: "존재하지 않는 ID 입니다요." });
  }

  todoData[parseInt(id)] = {
    title: todoData[parseInt(id)].title,
    desc: todoData[parseInt(id)].desc,
    isDone: !todoData[parseInt(id)].isDone,
  };

  console.log(todoData);
  res.json(todoData);
});

// todolist 삭제
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  if (parseInt(id) >= todoData.length) {
    res.status(400).json({ error: "존재하지 않는 ID를 삭제하지 못합니다." });
  }

  todoData = todoData.filter((v, i) => {
    return parseInt(id) !== i;
  });
  console.log(todoData);
  res.json(todoData);
});

module.exports = router;
