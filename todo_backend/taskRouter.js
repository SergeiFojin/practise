const express = require('express');
const router = express.Router();
const Task = require('./task-model');

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
        await  Task.updateOne({id: req.body.id}, {value: req.body.value})
        if (req.body.checkComplete) {
            await Task.updateOne({id: req.body.id}, {completed: req.body.completed})
        }
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
        const tasksArray = await Task.find();
        const completedTasksArray = tasksArray.filter(item => item.completed).sort((a, b) => a.id - b.id);
        const uncompletedTasksArray = tasksArray.filter(item => !item.completed).sort((a, b) => a.id - b.id);
        const resultArray = [...uncompletedTasksArray, ...completedTasksArray];
        res.status(200).send(resultArray);
    } catch (e) {
        res.status(400).json(e)
    }
})

module.exports = router
