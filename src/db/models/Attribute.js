// const Sequelize = require('sequelize');
// const db = require('./initialDB');

module.exports = (sequelize, DataTypes) => {
  const Attribute = sequelize.define('Attribute', {
    attrib: {
      type: DataTypes.STRING
    },
    referenceCode: {
      type: DataTypes.INTEGER,
      autoincrement: true,
      primaryKey: true,
    }
  });
  return Attribute;
}

