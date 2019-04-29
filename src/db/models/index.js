const Sequelize = require('sequelize');
const sequelize = new Sequelize('satwiz', 'satwiz', '',
{host: 'localhost',
dialect: 'postgres',
operatorsAliases: false,

pool: {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
    }
  })


// Pull all models into single "models" object
const models = {
  User: sequelize.import('./User'),
  TestSession: sequelize.import('./TestSession'),
  Question: sequelize.import('./Question'),
  Attribute: sequelize.import('./Attribute'),
};

// Sync associations
Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;