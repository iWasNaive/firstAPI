const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const todoRouter = require("./router/todo");
require("./config/db");

app.use("/api/todo", todoRouter);

app.get("/", (req, res) => {
  res.send("WEEElcome");
});

app.listen(process.env.PORT, () => {
  console.log("Start");
});
