const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 4000;
const tasks = require('./taskRouter');

app.use(cors());
app.use(express.json());
app.use('/', tasks);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log(process.pid);
})
