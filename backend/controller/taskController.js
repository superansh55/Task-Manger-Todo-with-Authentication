import Task from "../model/TaskModel.js";
import mongoose from "mongoose";

const getTasks = async (req, res) => {
    const user_id = req.user._id;
  const tasks = await Task.find({user_id}).sort({ createdAt: -1 });

  return res.status(200).json({ tasks });
};

const getSingleTask = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Task" });
  }

  const task = await Task.findById(id);
  if (!task) {
    return res.status(404).json({ error: "No such Task" });
  } else {
    res.status(200).json(task);
  }
};

const deleteTask = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Task" });
  }

  const task = await Task.findByIdAndDelete(id);
  if (!task) {
    return res.status(404).json({ error: "No such Task" });
  } else {
    res.status(200).json(task);
  }
};

const createTask = async (req, res) => {
  const { title, description, date } = req.body;
  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!date) {
    emptyFields.push("date");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all required fields", emptyFields });
  }
  try {
    const user_id = req.user._id;
    const task = await Task.create({ title, date, description,user_id });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateTask = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Task" });
  }

  const task = await Task.findByIdAndUpdate(id, { ...req.body }, { new: true });
  if (!task) {
    return res.status(404).json({ error: "No such Task" });
  } else {
    res.status(200).json(task);
  }
};

export { getTasks, getSingleTask, deleteTask, updateTask, createTask };
