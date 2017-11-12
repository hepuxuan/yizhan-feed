const express = require('express');
const multer = require('multer');
const feedService = require('../services/feedService');

const upload = multer({
  dest: 'public/uploads/',
});

const router = express.Router();

router.get('/new', async (req, res) => {
  const recommended = await feedService.findAll({ limit: 5 });
  res.render('createFeed', { recommended, js: 'createFeed' });
});

router.post('/', upload.array('images', 12), async (req, res) => {
  const date = new Date();
  let thumbnail;
  let images = [];
  if (req.files.length) {
    thumbnail = `/uploads/${req.files[0].filename}`;
    images = req.files.map(file => ({ url: `/uploads/${file.filename}` }));
  }

  await feedService.create({
    images,
    title: req.body.title,
    content: req.body.content,
    createdAt: date,
    updatedAt: date,
    thumbnail,
  });
  res.redirect('/');
});

router.get('/:id', async (req, res) => {
  const [feed, recommended] = await Promise.all([
    feedService.get(req.params.id),
    feedService.getRecommends(),
  ]);
  res.render('feed', { feed, recommended });
});

module.exports = router;
