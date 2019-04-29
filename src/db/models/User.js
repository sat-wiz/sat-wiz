module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    }
  });

  User.associate = (models) => {
    models.User.hasMany(models.TestSession)
  }
  return User;
}
