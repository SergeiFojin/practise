const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const tasks = require('./taskRouter');
const Task = require('./task-model');
dotenv.config();
mongoose.set('strictQuery', false);
const app = express();
const PORT = process.env.PORT || 4000;
const DATABASE_URL = process.env.DATABASE_URL;


app.use(cors());
app.use(express.json());
app.use('/api', tasks);

const start = async () => {
    try {
        await mongoose.connect(DATABASE_URL)
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
            console.log(process.pid);
        })
    } catch (e) {
        console.log(e.message)
    }
}

start()
