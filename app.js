//import dependencies
const mongoose   = require('mongoose');
const express    = require('express');
const bodyParser = require('body-parser');

//initialize app
const app = express();

//set up middleware + View Engine
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

//mongoose setup + importing todo model
require('dotenv').config();
mongoose.connect(process.env.DB_URL);
var db = mongoose.connection;
const todo = require('./models/todoModel');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('DB Connected!');
});

//Get the list
app.get('/', function(req, res){
    const todo_items = []
    todo.find(function(err, todos){
        if (err) return console.err(err);
        todo_items.push(todos);
    });
    res.render('todolist.ejs', {todo_items:todo_items});
});

app.post('/create', function(req, res){
    const todoBody = req.body.todo_field;
    const newTodo = new todo({ 'body': todoBody });
    newTodo.save(function (err, newTodo){
        if (err) return console.error(err);
    });
});

app.listen(3000, process.env.IP, function(){
    console.log('listening on port 3000');
});