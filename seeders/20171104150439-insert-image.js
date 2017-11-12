module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('images', [{
    url: 'https://o86bvekvw.qnssl.com/uploads/images/StoryImage/d61fa9c81e58b57ad30191e442554c8f.jpg',
    feedId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    url: 'https://o86bvekvw.qnssl.com/uploads/images/StoryImage/e420298d4fde07a072976df96b3aa54f.jpg',
    feedId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    url: 'https://o86bvekvw.qnssl.com/uploads/images/StoryImage/d30cd7342ec1763cdc63b7aaa05334b8.jpg',
    feedId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    url: 'https://o86bvekvw.qnssl.com/uploads/images/StoryImage/1653076db1d3de362f29d6063696c985.jpg',
    feedId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    url: 'https://o86bvekvw.qnssl.com/uploads/images/StoryImage/5ac27d3de084a261f17ad249dbee13fb.jpg',
    feedId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    url: 'https://o86bvekvw.qnssl.com/uploads/images/StoryImage/2e351bbf38136bc64104ebcd3720c34c.jpg',
    feedId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    url: 'https://o86bvekvw.qnssl.com/uploads/images/StoryImage/normal_068fe5849db4900fd82ad6c05d5076a3.jpg',
    feedId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('images', null, {});
  },
};
