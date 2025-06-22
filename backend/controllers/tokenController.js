const Token = require('../models/Token');
const Clinic = require('../models/Clinics');
// const moment = require('moment'); // Optional: for date comparison


exports.bookToken = async (req, res) => {
  const { clinicId } = req.body;
  const userId = req.user._id;

  try {
    const clinic = await Clinic.findById(clinicId);
    if (!clinic || !clinic.isActive) {
      return res.status(400).json({ message: 'Clinic not found or not accepting tokens.' });
    }

    // Check if user already booked a token today for this clinic
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const existing = await Token.findOne({
      clinicId,
      patientId: userId,
      bookedAt: { $gte: todayStart }
    });

    if (existing) {
      return res.status(400).json({ message: 'You already have a token today for this clinic.' });
    }

    // Count existing tokens for today to generate next token number
    const tokenCount = await Token.countDocuments({
      clinicId,
      bookedAt: { $gte: todayStart }
    });

    const newToken = await Token.create({
      clinicId,
      patientId: userId,
      tokenNumber: tokenCount + 1,
      status: 'waiting',
      bookedAt: new Date()
    });

    res.status(201).json({
      message: 'Token booked successfully',
      token: newToken
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.getTodayTokensForClinic = async (req, res) => {
  const clinicId = req.params.clinicId;

  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const tokens = await Token.find({
      clinicId,
      bookedAt: { $gte: startOfDay }
    })
      .sort({ tokenNumber: 1 })
      .populate('patientId', 'name email phone'); // to show patient info

    res.status(200).json({ tokens });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to load tokens' });
  }
};

exports.callToken = async (req, res) => {
  try {
    const token = await Token.findById(req.params.id);
    if (!token || token.status !== 'waiting') {
      return res.status(400).json({ message: 'Invalid token or already called' });
    }

    token.status = 'called';
    token.calledAt = new Date();
    await token.save();

    res.status(200).json({ message: 'Token called', token });
  } catch (err) {
    res.status(500).json({ message: 'Error calling token' });
  }
};

exports.completeToken = async (req, res) => {
  try {
    const token = await Token.findById(req.params.id);
    if (!token || token.status !== 'called') {
      return res.status(400).json({ message: 'Token must be called before completing' });
    }

    token.status = 'completed';
    token.completedAt = new Date();
    await token.save();

    res.status(200).json({ message: 'Token marked as completed', token });
  } catch (err) {
    res.status(500).json({ message: 'Error completing token' });
  }
};

