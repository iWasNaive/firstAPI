const todoModel = require("./../models/todo");

exports.GetAll = async (req, res) => {
  const AllTodo = await todoModel.find({}).lean();
  res.send(AllTodo);
};

exports.Create = async (req, res) => {
  const { body } = req.body;
  await todoModel.create({ body });
  res.send("Todo Added Succesfully");
};
