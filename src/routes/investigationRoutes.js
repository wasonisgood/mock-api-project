const express = require('express');
const router = express.Router();
const {
  getInvestigationArticles,
  createInvestigationArticle,
  getInvestigationArticleDetail,
  updateInvestigationArticle,
  deleteInvestigationArticle,
  getComments,
  addComment
} = require('../controllers/investigationController');

router.get('/', getInvestigationArticles);
router.post('/', createInvestigationArticle);
router.get('/:id', getInvestigationArticleDetail);
router.put('/:id', updateInvestigationArticle);
router.delete('/:id', deleteInvestigationArticle);
router.get('/:id/comments', getComments);
router.post('/:id/comments', addComment);

module.exports = router;
