const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 4000;
const tasks = require('./taskRouter');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const Task = require('./task-model');

app.use(cors());
app.use(express.json());
app.use('/api', tasks);
app.get('/', async (req, res) => {
    const tasksArray = await Task.find();
    const completedTasksArray = tasksArray.filter(item => item.completed).sort((a, b) => a.id - b.id);
    const uncompletedTasksArray = tasksArray.filter(item => !item.completed).sort((a, b) => a.id - b.id);
    const resultArray = [...uncompletedTasksArray, ...completedTasksArray];
    res.send(resultArray);
})

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://User:123@cluster0.pizpzvp.mongodb.net/?retryWrites=true&w=majority`)
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
            console.log(process.pid);
        })
    } catch (e) {
        console.log(e.message)
    }
}

start()
