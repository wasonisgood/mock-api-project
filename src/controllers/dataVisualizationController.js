const DataVisualization = require('../models/DataVisualization');

exports.getDataVisualizations = async (req, res) => {
  try {
    const data = await DataVisualization.find();
    res.json(data);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.createDataVisualization = async (req, res) => {
  try {
    const data = new DataVisualization(req.body);
    await data.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.deleteDataVisualization = async (req, res) => {
  try {
    const data = await DataVisualization.findOneAndRemove({ name: req.params.name });
    if (!data) {
      return res.status(404).send('Data visualization not found');
    }
    res.status(204).send('Data visualization deleted');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
