const Sequelize = require('sequelize');
const sequelize = new Sequelize('satwiz', 'satwiz', 'satwiz',
{host: 'localhost',
dialect: 'postgres',
operatorsAliases: false,

pool: {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
}})

const models = {
  question: sequelize.import('./Question'),

};



Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;