const mongoose = require('mongoose');

const TrendingTopicSchema = new mongoose.Schema({
  topic: String
});

module.exports = mongoose.model('TrendingTopic', TrendingTopicSchema);
