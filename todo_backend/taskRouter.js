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

router.get('/', (req, res) => {
    res.send(storageTasks);
})

router.post('/api/ADD/task', async (req, res) => {
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

            storageTasks.push(req.body);
            storageTasks = [...storageTasks, ...completedTasks]
        }
        writeFileAsync(path.resolve(__dirname, 'tasks.json'), JSON.stringify(storageTasks))
        res.status(200).send(`Task with id = ${req.body.id} was added.`)
    } catch (e) {
        res.status(400).json(e)
    }
})

router.put('/api/CHANGE/task', async (req, res) => {
    try {
        let changeTaskIndex = storageTasks.findIndex(item => item.id === req.body.id);
        if (changeTaskIndex !== -1) {
            storageTasks[changeTaskIndex].value = req.body.value;
        }
        writeFileAsync(path.resolve(__dirname, 'tasks.json'), JSON.stringify(storageTasks))
        res.status(200).send(`Task with id = ${req.body.id} was changed.`)
    } catch (e) {
        res.status(400).json(e)
    }
})

router.put('/api/COMPLETE/task',  (req, res) => {
    try {
        let completeTaskIndex = storageTasks.findIndex(item => item.id === req.body.id && !item.completed);
        if (completeTaskIndex !== -1) {
            storageTasks[completeTaskIndex].completed = true;
            let completedTask = storageTasks.splice(completeTaskIndex, 1);
            storageTasks.push(completedTask[0]);
        } else {
            completeTaskIndex = storageTasks.findIndex(item => item.id === req.body.id && item.completed);
            if (completeTaskIndex !== -1) {
                storageTasks[completeTaskIndex].completed = false;
                let completedTask = storageTasks.splice(completeTaskIndex, 1);
                storageTasks.unshift(completedTask[0]);
            }
        }
        writeFileAsync(path.resolve(__dirname, 'tasks.json'), JSON.stringify(storageTasks))
        res.status(200).send(`Task with id = ${req.body.id} was completed.`)
    } catch (e) {
        res.status(400).json(e)

    }
})

router.delete(`/api/DELETE/task`, async (req, res) => {
    try {
        let deleteTaskIndex = storageTasks.findIndex(item => item.id === req.query.id);
        if (deleteTaskIndex !== -1) {
            storageTasks.splice(deleteTaskIndex, 1)
        }
        writeFileAsync(path.resolve(__dirname, 'tasks.json'), JSON.stringify(storageTasks))
        res.status(200).send(`Task with id = ${req.query.id} was deleted.`)
    } catch (e) {
        res.status(400).json(e)
    }
})

module.exports = router
