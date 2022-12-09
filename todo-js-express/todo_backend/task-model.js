const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: String,
    value: String,
    completed: Boolean
});

module.exports = mongoose.model('Task', taskSchema)
