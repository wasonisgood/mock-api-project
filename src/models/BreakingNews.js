const mongoose = require('mongoose');

const BreakingNewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    required: true,
  },
  trending: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Number,
    default: 0,
  },
  showInBar: {
    type: Boolean,
    default: false,
  },
  relatedNews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BreakingNews',
    },
  ],
});

module.exports = mongoose.model('BreakingNews', BreakingNewsSchema);
