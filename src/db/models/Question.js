module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
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
    answer: {
      type: DataTypes.STRING
    }
  });

  Question.associate = (models)=>{
    models.Question.hasMany(models.Attribute)
  }
  return Question;
}
