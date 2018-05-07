//import todo model from models folder
const todo = require('../models/todoModel');

//export callback functions for each route we need
exports.todo_create = function(req, res) {
    res.send(placeholder);
}

exports.todo_delete = function(req, res) {
    res.send(placeholder);
}

exports.todo_update = function(req, res) {
    res.send(placeholder);
}

exports.todo_list = function(req, res) {
    res.render('../views/todoList.ejs');
}
