const express = require('express');
const router = express.Router();
const expeditionCtrl = require('../controllers/expeditionController');
const auth = require('../middleware/authMiddleware');

router.get("/", expeditionCtrl.list);                 // admin → all
router.get("/featured", expeditionCtrl.featured);     // frontend → featured only
router.get("/:id", expeditionCtrl.get);
router.post("/", auth, expeditionCtrl.create);
router.put("/:id", auth, expeditionCtrl.update);
router.delete("/:id", auth, expeditionCtrl.remove);

module.exports = router;
