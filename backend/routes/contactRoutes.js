const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contactController');
const auth = require('../middleware/authMiddleware');

router.post('/', contactCtrl.create);
router.get('/', auth, contactCtrl.list);

module.exports = router;
