const express = require('express');
const feedService = require('../services/feedService');

const router = express.Router();

router.get('/', async (req, res) => {
  const feeds = await feedService.findAll();
  const recommended = feeds.slice(0, 3);
  res.render('index', { feeds, recommended });
});

module.exports = router;
