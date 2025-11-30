const express = require("express");
const router = express.Router();
const hikeCtrl = require("../controllers/hikeController");
const auth = require("../middleware/authMiddleware");

router.get("/", hikeCtrl.list);                // admin → all hikes
router.get("/featured", hikeCtrl.featured);    // frontend → featured hikes only
router.get("/:id", hikeCtrl.get);
router.post("/", auth, hikeCtrl.create);
router.put("/:id", auth, hikeCtrl.update);
router.delete("/:id", auth, hikeCtrl.remove);

module.exports = router;
