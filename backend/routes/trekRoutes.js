const express = require('express');
const router = express.Router();
const trekCtrl = require('../controllers/trekController');
const auth = require('../middleware/authMiddleware');

router.get('/', trekCtrl.list);
router.get("/featured", trekCtrl.featured); 
router.get('/:id', trekCtrl.get);
router.post('/', auth, trekCtrl.create);
router.put('/:id', auth, trekCtrl.update);
router.delete('/:id', auth, trekCtrl.remove);
router.get("/featured", trekCtrl.featured); 

module.exports = router;
