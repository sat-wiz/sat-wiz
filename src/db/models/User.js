// const Sequelize = require('sequelize');
// const db = require('./initialDB');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      dafaultValue: 1,
      autoincrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    }
  });

  User.associate = (models) => {
models.User.hasMany(models.TestSession)
  }
  return User;
}
