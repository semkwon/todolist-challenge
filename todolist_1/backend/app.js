const express = require("express");
const cors = require("cors");
const todoRouter = require("./routes/todo");
const app = express();
const port = 3010;

app.use(cors());
app.use(express.json());
app.use("/todo", todoRouter);

app.get("/", (req, res) => {
  res.send("Hello, Express!!🚀");
});

app.listen(port, () => {
  console.log(`🚀🚀🚀 Server listening on port: ${port} 🚀🚀🚀`);
});
