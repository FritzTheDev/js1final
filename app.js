//import dependencies
const mongoose   = require('mongoose');
const express    = require('express');
const bodyParser = require('body-parser');

//initialize app
const app = express();

//set up middleware + View Engine
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

//mongoose setup + importing todo model
require('dotenv').config();
mongoose.connect(process.env.DB_URL);
var db = mongoose.connection;

const Todo = require('./models/todoModel');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('DB Connected!');
}); 
const ObjectId = mongoose.Schema.Types.ObjectId;

// todo.find(function (err, todo) {
//     if (err) return console.err(err);
//     todo_items.push(todo);
// });
//Get the list
app.get('/', async function (req, res, next) {
    try {
        const todos = await Todo.find({});
        res.render('todolist.ejs', { todos });
    } catch (err) {
        next(err);
    }
});

app.post('/create', function(req, res){
    const todoBody = req.body.todo_field;
    const todoId = mongoose.Types.ObjectId();
    const newTodo = new Todo({ 'body': todoBody, 'id': todoId});
    newTodo.save(function (err, newTodo){
        if (err) return console.error(err);
    });
    res.redirect('/');
});
//
app.get('/delete/:id', function(req, res){
    Todo.findByIdAndRemove(req.params.id, function(err1, doc){
        console.log('deleted document')
    });
    res.redirect('/');
});
app.post('/update/:id', function(req, res){
    Todo.findByIdAndUpdate(req.params.id, { $set: { body: req.body.updateText }}, function(err1, doc){
        console.log('updated document')
    });
    res.redirect('/');
})

app.listen(3000, process.env.IP, function(){
    console.log('listening on port 3000');
});