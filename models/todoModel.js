//import mongoose
const mongoose = require('mongoose');

//define Schema
const Schema = mongoose.Schema;

//create todo Schema
const todoSchema = new Schema(
    {
        body: {type: String, required: true, max: 30},
        checked_off: {type: String, default: Boolean}
    }
);

//create model
module.exports = mongoose.model('todo', todoSchema);