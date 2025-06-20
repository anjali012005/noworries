const express = require('express');
const router = express.Router();
const protect = require('../middleware/protect');
const { bookToken } = require('../controllers/tokenController');

router.post('/book', protect, bookToken);

module.exports = router;
