const express = require('express');
const router = express.Router();
const Task = require('./task-model');

router.get('/', async (req, res) => {
    try {
        const tasksArray = await Task.find();
        const completedTasksArray = tasksArray.filter(item => item.completed).sort((a, b) => a.id - b.id);
        const uncompletedTasksArray = tasksArray.filter(item => !item.completed).sort((a, b) => a.id - b.id);
        const resultArray = [...uncompletedTasksArray, ...completedTasksArray];
        res.status(200).send(resultArray);
    } catch (e) {
        res.status(400).json(e)
    }
})

router.post('/task', async (req, res) => {
    try {
        await Task.create(req.body)
        const tasksArray = await Task.find();
        const completedTasksArray = tasksArray.filter(item => item.completed).sort((a, b) => a.id - b.id);
        const uncompletedTasksArray = tasksArray.filter(item => !item.completed).sort((a, b) => a.id - b.id);
        const resultArray = [...uncompletedTasksArray, ...completedTasksArray];
        res.status(200).send(resultArray);
    } catch (e) {
        res.status(400).json(e)
    }
})

router.put('/task', async (req, res) => {
    try {
        const query = {value: req.body.value, ...(req.body.checkComplete ? {completed: req.body.completed} : null)};
        await Task.updateOne({id: req.body.id}, query);
        const tasksArray = await Task.find();
        const completedTasksArray = tasksArray.filter(item => item.completed).sort((a, b) => a.id - b.id);
        const uncompletedTasksArray = tasksArray.filter(item => !item.completed).sort((a, b) => a.id - b.id);
        const resultArray = [...uncompletedTasksArray, ...completedTasksArray];
        res.status(200).send(resultArray);
    } catch (e) {
        res.status(400).json(e)
    }
})

router.delete(`/task`, async (req, res) => {
    try {
        await Task.deleteOne({id: req.query.id})
        res.status(200).send(`Task with id = ${req.query.id} was deleted.`);
    } catch (e) {
        res.status(400).json(e)
    }
})

module.exports = router
