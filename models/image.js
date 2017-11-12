
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define('image', {
    url: DataTypes.STRING,
    feedId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'feed',
        key: 'id',
      },
    },
  });
  image.associate = (models) => {
    image.belongsTo(models.feed, { foreignKey: 'feedId' });
  };
  return image;
};
