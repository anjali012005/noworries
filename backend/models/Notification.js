const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  sentAt: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    enum: ['sms', 'email', 'whatsapp'],
    required: true
  }
});

module.exports = mongoose.model('Notification', notificationSchema);
