const express = require('express');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

items = [];

app.get('/items', (req, res) => {
    return res.json(items);
})

app.post('/items', (req, res) => {
    const { name } = req.body;
    items.push(name);
    return res.json(items);
})

app.put('/items/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    items[index] = name;
    return res.json(items);
})

app.delete('/items/:index', (req, res) => {
    const { index } = req.params;
    items.splice(index, 1);
    return res.json(items);
})

module.exports = app
