const Subscription = require('../models/Subscription');

exports.subscribeNewsletter = async (req, res) => {
  try {
    const subscription = new Subscription(req.body);
    await subscription.save();
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
