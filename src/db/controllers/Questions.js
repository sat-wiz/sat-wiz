const Question = require('../models').Question;

module.exports = {
  addAnswer(req, res) {
    console.log('\n\nhello from controller\n\n')
    return Question
      .create({
        answer: req.body.answer,
      })
      .then((answer) => res.status(201).send(answer))
      .catch((error) => res.status(400).send(error));
  }
}