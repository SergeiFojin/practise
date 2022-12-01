const express = require('express');
const app = express();
const PORT = 4000;

app.use('/', express.static('html+css/todo'));

app.get('/test', (req, res) => {
    console.log('Hello!');
})

app.get('/newpage', (req, res) => {
    res.send("It's a new page");
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log(process.pid);
})


