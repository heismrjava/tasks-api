const express = require("express");
const { body, validationResult } = require("express-validator");

const Task = require("../models/task.model.js");
const { routes } = require("../config/routes.js");

const router = express.Router();

//Rutas de tareas
router.get(routes.index, async (req, res) => {
  const task = await Task.find();
  res.json(task);
});

router.get(routes.show, async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.json(task);
});

router.post(routes.create, async (req, res) => {
  //const task = new Task(req.body);
  const { title, description } = req.body;
  //Aqui realizariamos las validadciones, si todo esta correcto creamos la tarea
  if (!title || !description) {
    return res.status(400).json({ message: "Complete all fields" });
  }
  const task = new Task({ title, description });
  await task.save();
  res.json(task);
});

router.put(routes.update, async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: "Complete all fields" });
  }
  const updatedTask = { title, description };
  await Task.findByIdAndUpdate(id, updatedTask);
  res.json(updatedTask);
});

router.delete(routes.delete, async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res
      .status(400)
      .json({ message: "The request could not be processed" });
  }
  await Task.findByIdAndDelete(id);
  res.json({ message: "Task deleted" });
});

module.exports = router;
