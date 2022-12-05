const express = require('express');
const app = express();
const PORT = 4000;
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const filename = 'tasks.json';
let tasks = require('./tasks.json')

app.use(cors());
app.use(express.json());

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log(process.pid);
})

app.get('/', (req, res) => {
    res.send(tasks);
})

app.post('/api/add-task', async (req, res) => {
    try {
        if (tasks.length === 0) {
            tasks.push(req.body);

        } else {
            let test = [];

            tasks.map((item, index, array) => {
                if (item.completed === true) {
                    test = tasks.splice(index, array.length - index);
                }
            })

            tasks.push(req.body);
            tasks = [...tasks, ...test]
        }

        writeFileAsync(path.resolve(__dirname, 'tasks.json'), JSON.stringify(tasks))
        res.status(200).send('Task added')

    } catch (e) {
        res.status(500).json(e)
    }
})

app.post('/api/change-task', async (req, res) => {
    try {

        tasks.map(item => {
            if (item.id === req.body.id) {
                item.value = req.body.value;
            }
        })

        writeFileAsync(path.resolve(__dirname, 'tasks.json'), JSON.stringify(tasks))
        res.status(200).send('Task changed')

    } catch (e) {
        res.status(500).json(e)
    }
})

app.post('/api/complete-task',  (req, res) => {
    try {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === req.body.id && tasks[i].completed === false) {
                tasks[i].completed = true;
                let completedTask = tasks.splice(i, 1);
                tasks.push(completedTask[0]);
                return;

            } else if (tasks[i].id === req.body.id && tasks[i].completed === true) {
                    tasks[i].completed = false;
                    let completedTask = tasks.splice(i, 1);
                    tasks.unshift(completedTask[0]);
            }
        }

        writeFileAsync(path.resolve(__dirname, 'tasks.json'), JSON.stringify(tasks))
        res.status(200).send('Task completed')

    } catch (e) {
        res.status(500).json(e)

    }
})

app.post('/api/remove-task', async (req, res) => {
    try {

        tasks.map((item, index, array) => {
            if (item.id === req.body.id) {
                array.splice(index, 1);
            }
        })

        writeFileAsync(path.resolve(__dirname, 'tasks.json'), JSON.stringify(tasks))
        res.status(200).send('Task deleted')

    } catch (e) {
        res.status(500).json(e)
    }
})

