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

// todolist 완료 여부
router.put("/done/:id", (req, res) => {
  const { id } = req.params;

  todoData[parseInt(id)] = {
    title: todoData[parseInt(id)].title,
    desc: todoData[parseInt(id)].desc,
    isDone: !todoData[parseInt(id)].isDone,
  };

  console.log(todoData);
  res.json(todoData);

  // 왜 이렇게 하면 안될까??
  // let parseIntId = todoData[parseInt(id)];
  // console.log(todoData[parseInt(id)]);

  // parseIntId = {
  //   title: parseIntId.title,
  //   desc: parseIntId.desc,
  //   isDone: !parseIntId.isDone,
  // };
});

module.exports = router;
