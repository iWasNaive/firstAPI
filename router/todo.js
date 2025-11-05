const express = require("express");
const todoController = require("./../controllers/todo");

const todoRouter = express.Router();

todoRouter.route("/").get(todoController.GetAll);

module.exports = todoRouter;
