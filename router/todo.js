const express = require("express");
const todoController = require("./../controllers/todo");

const todoRouter = express.Router();

todoRouter.route("/").get(todoController.GetAll).post(todoController.Create);

module.exports = todoRouter;
