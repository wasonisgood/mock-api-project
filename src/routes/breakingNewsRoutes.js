const express = require('express');
const router = express.Router();
const {
  getBreakingNews,
  createBreakingNews,
  getBreakingNewsDetail,
  updateBreakingNews,
  deleteBreakingNews
} = require('../controllers/breakingNewsController');

router.get('/', getBreakingNews);
router.post('/', createBreakingNews);
router.get('/:id', getBreakingNewsDetail);
router.put('/:id', updateBreakingNews);
router.delete('/:id', deleteBreakingNews);

module.exports = router;
