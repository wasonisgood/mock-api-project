const express = require('express');
const router = express.Router();
const {
  getReports,
  createReport,
  getReportDetail,
  updateReport,
  deleteReport
} = require('../controllers/reportController');

router.get('/', getReports);
router.post('/', createReport);
router.get('/:id', getReportDetail);
router.put('/:id', updateReport);
router.delete('/:id', deleteReport);

module.exports = router;
