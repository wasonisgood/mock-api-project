const express = require('express');
const router = express.Router();
const {
  getTrendingTopics,
  createTrendingTopic,
  updateTrendingTopic,
  deleteTrendingTopic
} = require('../controllers/trendingTopicsController');

router.get('/', getTrendingTopics);
router.post('/', createTrendingTopic);
router.put('/:id', updateTrendingTopic);
router.delete('/:id', deleteTrendingTopic);

module.exports = router;
