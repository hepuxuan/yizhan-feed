module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('feeds', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.TEXT,
    },
    subTitle: {
      type: Sequelize.TEXT,
    },
    thumbnail: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('feeds'),
};
