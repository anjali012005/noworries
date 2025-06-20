const Clinic = require('../models/Clinics');

exports.createClinic = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Only admins can create clinics' });
    }

    const { name, address, contactNumber } = req.body;

    const clinic = await Clinic.create({
      name,
      address,
      contactNumber,
      adminId: req.user._id,
      isActive: true,
      createdAt: new Date()
    });

    res.status(201).json({
      message: 'Clinic created successfully',
      clinic
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
