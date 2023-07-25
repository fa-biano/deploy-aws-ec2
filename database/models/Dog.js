module.exports = (sequelize, DataTypes) => {
  const Dog = sequelize.define('Dog', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
     },
    name: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
  },
  {
    underscored: true,
    timestamps: false,
  });

  return Dog;
};