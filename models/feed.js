module.exports = (sequelize, DataTypes) => {
  const feed = sequelize.define('feed', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    content: DataTypes.TEXT,
    title: DataTypes.TEXT,
    subTitle: DataTypes.TEXT,
    thumbnail: DataTypes.STRING,
    createdAt: DataTypes.DATE,
  });
  feed.associate = (models) => {
    feed.hasMany(models.image, { foreignKey: 'feedId', as: 'images' });
  };
  return feed;
};
