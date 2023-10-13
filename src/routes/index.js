const express = require('express');
const Task = require('../models/task.model.js');
const router = express.Router();

router.get('/', async (req, res) => {
    const task = await Task.find();
    res.json(task);
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const task = await Task.findById(id);
    res.json(task);
});

router.post('/', async (req, res) => {
    //const task = new Task(req.body);
    const {title, description} = req.body;
    //Aqui realizariamos las validadciones, si todo esta correcto creamos la tarea
    const task = new Task({title, description});
    await task.save();
    res.json(task);
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {title, description} = req.body;
    const updatedTask = {title, description};
    await Task.findByIdAndUpdate(id, updatedTask);
    res.json(updatedTask);
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    await Task.findByIdAndDelete(id);
    res.json({message: 'Task deleted'});
});

module.exports = router;