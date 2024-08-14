const mongoose = require('mongoose');

const InvestigationArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  readTime: {
    type: Number,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  isBreaking: {
    type: Boolean,
    default: false,
  },
  content: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  relatedArticles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'InvestigationArticle',
    },
  ],
});

module.exports = mongoose.model('InvestigationArticle', InvestigationArticleSchema);
