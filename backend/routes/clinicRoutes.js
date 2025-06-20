const express = require('express');
const router = express.Router();
const protect = require('../middleware/protect');
const { createClinic } = require('../controllers/clinicController');

router.post('/create', protect, createClinic);

module.exports = router;
