const Sequelize = require('sequelize');
const db = require('./db');

  const Question = db.define('question', {
    testId: {
      type: Sequelize.STRING,
    },
    questionNum: {
      type: Sequelize.INTEGER,
    },
    attrib: {
      type: Sequelize.STRING,
      defaultValue: null
    },
    answer: {
      type: Sequelize.STRING
    }
  });

module.exports = Question;
// module.exports = (sequelize, DataTypes) => {
//   const Question = sequelize.define('question', {
//     testId: {
//       type: DataTypes.STRING,
//     },
//     questionNum: {
//       type: DataTypes.INTEGER,
//     },
//     attrib: {
//       type: DataTypes.STRING,
//       defaultValue: null
//     },
//     answer: {
//       type: DataTypes.STRING
//     }
//   });
//   return Question;
// }
