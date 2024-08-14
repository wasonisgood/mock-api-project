const Report = require('../models/Report');

exports.getReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.createReport = async (req, res) => {
  try {
    const report = new Report(req.body);
    await report.save();
    res.status(201).json(report);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getReportDetail = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) {
      return res.status(404).send('Report not found');
    }
    res.json(report);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.updateReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!report) {
      return res.status(404).send('Report not found');
    }
    res.json(report);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.deleteReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndRemove(req.params.id);
    if (!report) {
      return res.status(404).send('Report not found');
    }
    res.status(204).send('Report deleted');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
