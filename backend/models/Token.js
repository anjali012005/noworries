const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    clinicId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clinic',
        required: true
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tokenNumber: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['waiting', 'called', 'completed', 'cancelled'],
        default: 'waiting'
    },
    bookedAt: {
        type: Date,
        default: Date.now
    },
    calledAt: Date,
    completedAt: Date
});

module.exports = mongoose.model('Token', tokenSchema);
