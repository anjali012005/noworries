const express = require('express');
const router = express.Router();
const protect = require('../middleware/protect');
const {
  bookToken,
  getTodayTokensForClinic,
  callToken,
  completeToken
} = require('../controllers/tokenController');


router.post('/book', protect, bookToken);
router.get('/admin/clinic/:clinicId/tokens', protect, getTodayTokensForClinic);
router.put('/:id/call', protect, callToken);
router.put('/:id/complete', protect, completeToken);



module.exports = router;
