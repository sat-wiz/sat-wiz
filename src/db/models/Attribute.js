module.exports = (sequelize, DataTypes) => {
  const Attribute = sequelize.define('Attribute', {
    attrib: {
      type: DataTypes.STRING
    },
    // referencecode: {
    //   type: DataTypes.INTEGER,
    //   autoincrement: true,
    //   primaryKey: true,
    // }
  });
  return Attribute;
}

