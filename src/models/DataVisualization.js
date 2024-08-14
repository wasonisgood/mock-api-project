const mongoose = require('mongoose');

const DataVisualizationSchema = new mongoose.Schema({
  name: String,
  value: Number
});

module.exports = mongoose.model('DataVisualization', DataVisualizationSchema);
