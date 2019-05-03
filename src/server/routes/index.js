const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const models = require('../../db/models/index');
const answers = require('../../db/models/answerSheet');


//get userId from authO so we can use it in our post request to the database




router.get('/public', function (req, res) {
  res.json({
    message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
  });
});

// var options2 = {
//   method: 'POST',
//   url: 'https://juliebeak.auth0.com/oauth/token',
//   headers: { 'content-type': 'application/x-www-form-urlencoded' },
//   form:
//   {
//     grant_type: 'client_credentials',
//     client_id: 'PJMHq5r4HqSf9YfULATtbomGYtSLYc7q',
//     client_secret: 'mapVQg9r9HXnoRglFrrYPLdClkLBwe05LPZb--c8s02sOjPPx2Bvfic7wazGl1o4',
//     audience: 'https://api.example.com/geocoding/v1/'
//   }
// };

// request(options2, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });



router.get('/', (req, res) => res.status(200).send({
  //TODO: cleanup
  message: 'Welcome to the Todos API!',
}))

router.get('/add', (req, res) => res.status(200).send({
  //TODO: cleanup
  message: 'Success GET to /add!',
}))

//TODO: we need to be able to retrieve separate tests
router.get('/questionsTest', (req, res) => {
  models.Question
    .bulkCreate(answers)
    .then((ans) => res.status(201).send(ans))
    .catch((error) => res.status(400).send(error));
});

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://localhost:3000/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'PJMHq5r4HqSf9YfULATtbomGYtSLYc7q',
  issuer: `http://localhost:3000/`,
  algorithms: ['RS256']
});


router.post('/', checkJwt, (req, res) => {
  console.log(res.body)
  console.log('posted!')
})

// router.post('/users', checkJwt, (req, res) => {
//TODO: users and test routes should be separate
//currently this is test/users ???
router.post('/users', (req, res) => {
  console.log(req.body.firstname)
  models.User
    .create({
      firstname: req.body.firstname,
      lastname: req.body.lastname
    })
    .then((users) => res.status(201).send(users))
    .catch((error) => res.status.send(error));
});

//TODO: why is there a post route for creating an attribute?
router.post('/attributeTest', (req, res) => {
  models.Attribute
    .create({
      attrib: req.body.attrib,
      // referencecode: req.body.referencecode
    })
    .then((attrib) => res.status(201).send(attrib))
    .catch((error) => res.status.send(error));
})


//create a seperate middleware to get the user id from oauth, save test session to users ID in database


router.post('/testSession', (req, res) => {
  models.TestSession
    .create(
      {
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
        q4: req.body.q4,
        q5: req.body.q5,
        q6: req.body.q6,
        q7: req.body.q7,
        q8: req.body.q8,
        q9: req.body.q9,
        q10: req.body.q10,
        q11: req.body.q11,
        q12: req.body.q12,
        q13: req.body.q13,
        q14: req.body.q14,
        q15: req.body.q15,
        q16: req.body.q16,
        q17: req.body.q17,
        q18: req.body.q18,
        q19: req.body.q19,
        q20: req.body.q20,
        q21: req.body.q21,
        q22: req.body.q22,
        q23: req.body.q23,
        q24: req.body.q24,
        q25: req.body.q25,
        q26: req.body.q26,
        q27: req.body.q27,
        q28: req.body.q28,
        q29: req.body.q29,
        q30: req.body.q30,
        q31: req.body.q31,
        q32: req.body.q32,
        q33: req.body.q33,
        q34: req.body.q34,
        q35: req.body.q35,
        q36: req.body.q36,
        q37: req.body.q37,
        q38: req.body.q38,
        q39: req.body.q39,
        q40: req.body.q40,
        q41: req.body.q41,
        q42: req.body.q42,
        q43: req.body.q43,
        q44: req.body.q44,
        q45: req.body.q45,
        q46: req.body.q46,
        q47: req.body.q47,
        q48: req.body.q48,
        q49: req.body.q49,
        q50: req.body.q50,
        q51: req.body.q51,
        q52: req.body.q52,
        q53: req.body.q53,
        q54: req.body.q54,
        q55: req.body.q55,
        q56: req.body.q56,
        q57: req.body.q57,
        q58: req.body.q58,
        q59: req.body.q59,
        q60: req.body.q60,
        q61: req.body.q61,
        q62: req.body.q62,
        q63: req.body.q63,
        q64: req.body.q64,
        q65: req.body.q65,
        q66: req.body.q66,
        q67: req.body.q67,
        q68: req.body.q68,
        q69: req.body.q69,
        q70: req.body.q70,
        q71: req.body.q71,
        q72: req.body.q72,
        q73: req.body.q73,
        q74: req.body.q74,
        q75: req.body.q75,
        q76: req.body.q76,
        q77: req.body.q77,
        q78: req.body.q78,
        q79: req.body.q79,
        q80: req.body.q80,
        q81: req.body.q81,
        q82: req.body.q82,
        q83: req.body.q83,
        q84: req.body.q84,
        q85: req.body.q85,
        q86: req.body.q86,
        q87: req.body.q87,
        q88: req.body.q88,
        q89: req.body.q89,
        q90: req.body.q90,
        q91: req.body.q91,
        q92: req.body.q92,
        q93: req.body.q93,
        q94: req.body.q94,
        q95: req.body.q95,
        q96: req.body.q96,
        q97: req.body.q97,
        q98: req.body.q98,
        q99: req.body.q99,
        q100: req.body.q100,
        q101: req.body.q101,
        q102: req.body.q102,
        q103: req.body.q103,
        q104: req.body.q104,
        q105: req.body.q105,
        q106: req.body.q106,
        q107: req.body.q107,
        q108: req.body.q108,
        q109: req.body.q109,
        q110: req.body.q110,
        q111: req.body.q111,
        q112: req.body.q112,
        q113: req.body.q113,
        q114: req.body.q114,
        q115: req.body.q115,
        q116: req.body.q116,
        q117: req.body.q117,
        q118: req.body.q118,
        q119: req.body.q119,
        q120: req.body.q120,
        q121: req.body.q121,
        q122: req.body.q122,
        q123: req.body.q123,
        q124: req.body.q124,
        q125: req.body.q125,
        q126: req.body.q126,
        q127: req.body.q127,
        q128: req.body.q128,
        q129: req.body.q129,
        q130: req.body.q130,
        q131: req.body.q131,
        q132: req.body.q132,
        q133: req.body.q133,
        q134: req.body.q134,
        q135: req.body.q135,
        q136: req.body.q136,
        q137: req.body.q137,
        q138: req.body.q138,
        q139: req.body.q139,
        q140: req.body.q140,
        q141: req.body.q141,
        q142: req.body.q142,
        q143: req.body.q143,
        q144: req.body.q144,
        q145: req.body.q145,
        q146: req.body.q146,
        q147: req.body.q147,
        q148: req.body.q148,
        q149: req.body.q149,
        q150: req.body.q150,
        q151: req.body.q151,
        q152: req.body.q152,
        q153: req.body.q153,
        q154: req.body.q154
      }
    )
    .then((testsession) => res.status(201).send(testsession))
    .catch((error) => res.status.send(error));
})



module.exports = router;

