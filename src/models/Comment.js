const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  articleId: { type: mongoose.Schema.Types.ObjectId, ref: 'InvestigationArticle' },
  user: String,
  comment: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', CommentSchema);
