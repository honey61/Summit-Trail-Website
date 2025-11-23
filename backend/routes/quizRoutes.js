const express = require('express');
const router = express.Router();
const quizCtrl = require('../controllers/quizController');
const auth = require('../middleware/authMiddleware');

router.post('/', quizCtrl.save);
router.get('/', auth, quizCtrl.list);

module.exports = router;
