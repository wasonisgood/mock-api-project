const InvestigationArticle = require('../models/InvestigationArticle');
const Comment = require('../models/Comment');

exports.getInvestigationArticles = async (req, res) => {
  try {
    const articles = await InvestigationArticle.find();
    res.json(articles);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.createInvestigationArticle = async (req, res) => {
  try {
    const article = new InvestigationArticle(req.body);
    await article.save();
    res.status(201).json(article);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getInvestigationArticleDetail = async (req, res) => {
  try {
    const article = await InvestigationArticle.findById(req.params.id);
    if (!article) {
      return res.status(404).send('Article not found');
    }
    res.json(article);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.updateInvestigationArticle = async (req, res) => {
  try {
    const article = await InvestigationArticle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!article) {
      return res.status(404).send('Article not found');
    }
    res.json(article);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.deleteInvestigationArticle = async (req, res) => {
  try {
    const article = await InvestigationArticle.findByIdAndRemove(req.params.id);
    if (!article) {
      return res.status(404).send('Article not found');
    }
    res.status(204).send('Article deleted');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ articleId: req.params.id });
    res.json(comments);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.addComment = async (req, res) => {
  try {
    const comment = new Comment({ ...req.body, articleId: req.params.id });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
