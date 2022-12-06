const express = require('express');
const path = require("path");
const router = express.Router();
const fs = require("fs");
let storageTasks = require("./tasks.json");

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}

router.post('/task', async (req, res) => {
    try {
        if (storageTasks.length === 0) {
            storageTasks.push(req.body);
        } else {
            let completedTasks = [];

            storageTasks.forEach((item, index, array) => {
                if (item.completed) {
                    completedTasks = storageTasks.splice(index, array.length - index);
                }
            })

            storageTasks = [...storageTasks, req.body, ...completedTasks]
        }
        writeFileAsync(path.resolve(__dirname, 'tasks.json'), JSON.stringify(storageTasks))
        res.status(200).send(`Task with id = ${req.body.id} was added.`)
    } catch (e) {
        res.status(400).json(e)
    }
})

router.put('/task', async (req, res) => {
    try {
        const changeTaskIndex = storageTasks.findIndex(item => item.id === req.body.id);
        if (changeTaskIndex === -1) {
            throw new Error('Task with this ID was not found');
        }
        storageTasks[changeTaskIndex].value = req.body.value;
        if (req.body.complete) {
            const operationWithArray = storageTasks[changeTaskIndex].completed ? 'unshift' : 'push';
            storageTasks[changeTaskIndex].completed = !storageTasks[changeTaskIndex].completed;
            const completedTask = storageTasks.splice(changeTaskIndex, 1);
            storageTasks[operationWithArray](completedTask[0]);
        }
        writeFileAsync(path.resolve(__dirname, 'tasks.json'), JSON.stringify(storageTasks))
        res.status(200).send(`Task with id = ${req.body.id} was changed.`)
    } catch (e) {
        res.status(400).json(e)
    }
})

router.delete(`/task`, async (req, res) => {
    try {
        const deleteTaskIndex = storageTasks.findIndex(item => item.id === req.query.id);
        if (deleteTaskIndex === -1) {
            throw new Error('Task with this ID was not found');
        }
        storageTasks.splice(deleteTaskIndex, 1);
        writeFileAsync(path.resolve(__dirname, 'tasks.json'), JSON.stringify(storageTasks))
        res.status(200).send(`Task with id = ${req.query.id} was deleted.`)
    } catch (e) {
        res.status(400).json(e)
    }
})

module.exports = router
