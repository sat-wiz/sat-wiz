const express = require('express');
const app = express();
const db = require('../db/models/db')
const models = require('../db/models/index');
const sequelize = require('sequelize');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

// Sync DB on start. {force: true} drops DB if it exists (use for dev)
models.sequelize.sync({force: true})
    .then(() => {
    app.listen(3000, () => {
        console.log("Server listening on port 3000");
    });
})

app.use('/test',
    require('./routes/_index.js')
);

app.get('/', function(req,res) {
    res.send('Testing!')
})

module.exports = app;