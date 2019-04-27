const questionsController = require('../../db/controllers/Questions');
const express = require('express');
// const app = express();
const router = express.Router();


router.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the Todos API!',
}))

router.post('/add', questionsController.addAnswer,
//   (req, res) => {
//   console.log(req.body),
//     res.status(200).send({
//       message: 'Success GET to /add!',
//     });
// }
)




module.exports = router;

