const TrendingTopic = require('../models/TrendingTopic');

// Get all trending topics
exports.getTrendingTopics = async (req, res) => {
  try {
    const topics = await TrendingTopic.find();
    res.json(topics);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Create a new trending topic
exports.createTrendingTopic = async (req, res) => {
  const { topic } = req.body;
  
  if (!topic) {
    return res.status(400).json({ message: 'Topic is required' });
  }

  try {
    const newTopic = new TrendingTopic({ topic });
    const savedTopic = await newTopic.save();
    res.status(201).json(savedTopic);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Update a trending topic
exports.updateTrendingTopic = async (req, res) => {
  const { id } = req.params;
  const { topic } = req.body;

  if (!topic) {
    return res.status(400).json({ message: 'Topic is required' });
  }

  try {
    const updatedTopic = await TrendingTopic.findByIdAndUpdate(id, { topic }, { new: true });
    if (!updatedTopic) {
      return res.status(404).json({ message: 'Topic not found' });
    }
    res.json(updatedTopic);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Delete a trending topic
exports.deleteTrendingTopic = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTopic = await TrendingTopic.findByIdAndDelete(id);
    if (!deletedTopic) {
      return res.status(404).json({ message: 'Topic not found' });
    }
    res.json({ message: 'Topic deleted' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
