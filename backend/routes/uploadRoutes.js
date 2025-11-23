const router = require("express").Router();
const upload = require("../middleware/multer");
const cloudinary = require("../config/cloudinary");

router.post("/", upload.single("image"), async (req, res) => {
  try {
    console.log("File received:", req.file);

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "summit-trails",
    });

    res.json({ url: result.secure_url });
  } catch (err) {
    console.error("Cloudinary error:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
