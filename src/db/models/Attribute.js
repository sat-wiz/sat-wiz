// const Sequelize = require('sequelize');
// const db = require('./initialDB');

module.exports = (sequelize, DataTypes) => {
  const Attribute = sequelize.define('Attribute', {
    attrib: {
      type: Sequelize.STRING
    },
    referenceCode: {
      type: Sequelize.INTEGER,
      autoincrement: true,
      primaryKey: true,
    }
  });
  return Attribute;
}

