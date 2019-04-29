// const questionsController = require('../../db/controllers/Questions');
const express = require('express');
// const app = express();
const router = express.Router();
// const Question = require('../../db/models').Question;
const models = require('../../db/models/index');
// const Question = require('../../db/models/Question');

router.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the Todos API!',
}))

router.get('/add', (req, res) => res.status(200).send({
  message: 'Success GET to /add!',
}))

router.get('/questionsTest', (req, res) => {
  // console.log(models)
  models.question
    .create({ answer: 'this is a success', })
    .then((ans) => res.status(201).send(ans))
    .catch((error) => res.status(400).send(error));
 
});



module.exports = router;

