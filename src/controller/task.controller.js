import Task from "../models/task.model.js";

export const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) return (404).send("task not found");
    res.send(task);
  } catch (error) {
    console.log(error);
  }
};

export const getTasks = async (req, res) => {
  try {
    const task = await Task.find({user:req.user.id}).populate('user');
    res.send(task);
  } catch (error) {
    console.log(error);
  }
};
export const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const task = new Task({
      title,
      description,
      date,
      user:req.user.id
    });
    const taskSaved = await task.save();
    res.status(201).send({ task: taskSaved._id });
    console.log(req.user.id);
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true } );
    if (!task) return (404).send("task not found");
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) return (404).send("task not found");
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
};
