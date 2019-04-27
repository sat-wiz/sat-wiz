
const Sequelize = require('sequelize');
// const config = require('../config/config.json');

module.exports = new Sequelize('satwiz', 'satwiz', 'satwiz', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
