// get router + express going
const express = require('express');
const router  = express.Router();

//require controller module
const todo_controller = require("../controllers/todoController");

//Get the list
router.get('/', todo_controller.todo_list);

//POST request for creating todo
router.post('/create', todo_controller.todo_create);

//POST request for deleting todo
router.post('/delete', todo_controller.todo_delete);

//POST request for updating todo
router.post('/update', todo_controller.todo_update)