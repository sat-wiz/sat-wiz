const Sequelize = require('sequelize');
const db = require('./initialDB');

module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('question', {
    testId: {
      type: DataTypes.STRING,
    },
    questionNum: {
      type: DataTypes.INTEGER,
    },
    attrib: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    answers: {
      type: DataTypes.STRING
    }
  });
}
