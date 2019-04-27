const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req,res) {
    res.send('Testing!')
})

app.listen(3000, () => {
    console.log("Server listening on port 3000")
});

module.exports = app;