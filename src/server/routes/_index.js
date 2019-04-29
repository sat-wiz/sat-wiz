// const questionsController = require('../../db/controllers/Questions');
// const app = express();
// const Question = require('../../db/models').Question;
// const Question = require('../../db/models/Question');
const express = require('express');
const router = express.Router();
const models = require('../../db/models/index');
const answers = require('../../db/models/answerSheet')

router.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the Todos API!',
}))

router.get('/add', (req, res) => res.status(200).send({
  message: 'Success GET to /add!',
}))

router.get('/questionsTest', (req, res) => {
  models.Question
    .bulkCreate(answers)
    .then((ans) => res.status(201).send(ans))
    .catch((error) => res.status(400).send(error));
});

router.post('/users', (req, res) => {
  models.user
    .create({
      id: req.body.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    })
    .then((users) => res.status(201).send(users))
    .catch((error) => res.status.send(error));
});

router.post('/attributeTest', (req, res) => {
  models.attribute
    .create({
      attrib: req.body.attrib,
      referenceCode: req.body.referenceCode
    })
    .then((attrib) => res.status(201).send(attrib))
    .catch((error) => res.status.send(error));
})



module.exports = router;

