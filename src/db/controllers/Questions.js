const Question = require('../models').Question;

module.exports = {
  create(req, res) {
    return Question
      .create({
        answer: req.body.answer,
      })
      .then((ans) => res.status(201).send(ans))
      .catch((error) => res.status(400).send(error));
  }
}