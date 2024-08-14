const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  email: String
});

module.exports = mongoose.model('Subscription', SubscriptionSchema);
