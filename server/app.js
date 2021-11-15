const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser')

// add your code here
app.use(bodyParser.json());
var todoItems = [
    {
        todoItemId: 0,
        name: 'an item',
        priority: 3,
        completed: false
    },
    {
        todoItemId: 1,
        name: 'another item',
        priority: 2,
        completed: false
    },
    {
        todoItemId: 2,
        name: 'a done item',
        priority: 1,
        completed: true
    }
];

items = [0, 1, 2];
app.get('/', function(req, res) {
    res.status(200).json();
});

app.get('/api/TodoItems', function(req, res) {
    res.json(todoItems);
});

app.get('api/TodoItems/:number', function(req, res) {
    var num = parseInt(req.params.number);
    res.json(todoItems[itemsID.indexOf(num)]);
});

app.post('/api/TodoItems/', function(req, res) {
    if(itemsID.includes(req.body.todoItemId)) {
        todoItems.splice(itemsID.indexOf(req.body.todoItemId, 1, req.body));
    } else {
        todoItems.push(req.body);
        itemsID.push(req.body.todoItemId);
    }; 
    res.status(201).send(req.body);
});

app.delete('/api/TodoItems/:number', function(req, res) {
    var num = parseInt(req.params.number);
    res.json(todoItems[num]);
    todoItems.splice(itemsID.indexOf(num), 1);
    itemID.splice(itemsID.indexOf(num), 1);
});

module.exports = app;
