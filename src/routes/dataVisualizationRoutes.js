const express = require('express');
const router = express.Router();
const {
  getDataVisualizations,
  createDataVisualization,
  deleteDataVisualization
} = require('../controllers/dataVisualizationController');

router.get('/', getDataVisualizations);
router.post('/', createDataVisualization);
router.delete('/:name', deleteDataVisualization);

module.exports = router;
