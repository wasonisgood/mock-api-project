const BreakingNews = require('../models/BreakingNews');

exports.getBreakingNews = async (req, res) => {
  try {
    const news = await BreakingNews.find();
    res.json(news);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.createBreakingNews = async (req, res) => {
  try {
    const news = new BreakingNews(req.body);
    await news.save();
    res.status(201).json(news);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getBreakingNewsDetail = async (req, res) => {
  try {
    const news = await BreakingNews.findById(req.params.id);
    if (!news) {
      return res.status(404).send('News not found');
    }
    res.json(news);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.updateBreakingNews = async (req, res) => {
  try {
    const news = await BreakingNews.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!news) {
      return res.status(404).send('News not found');
    }
    res.json(news);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.deleteBreakingNews = async (req, res) => {
  try {
    const news = await BreakingNews.findByIdAndRemove(req.params.id);
    if (!news) {
      return res.status(404).send('News not found');
    }
    res.status(204).send('News deleted');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
