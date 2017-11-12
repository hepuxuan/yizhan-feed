const models = require('../models');

module.exports = {
  getRecommends() {
    return this.findAll({ limit: 3 });
  },
  get(id) {
    return models.feed.findById(id, {
      include: [{
        model: models.image,
        as: 'images',
      }],
    });
  },
  findAll(params = {}) {
    return models.feed.findAll({
      ...params,
      include: [{
        model: models.image,
        as: 'images',
      }],
    });
  },
  create(feed) {
    return models.feed.create(feed, {
      include: [{
        model: models.image,
        as: 'images',
      }],
    });
  },
};
