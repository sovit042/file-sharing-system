const express = require("express");
const router = express.Router();
const multer = require("multer");
const File = require("../models/File");

// storage config
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// generate random 4-digit PIN
function generatePin() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

// Upload file
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const pin = generatePin();

    const newFile = new File({
      filename: req.file.filename,
      filepath: req.file.path,
      pin
    });

    await newFile.save();

    res.json({ message: "File uploaded", pin });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get file by PIN
router.get("/:pin", async (req, res) => {
  try {
    const file = await File.findOne({ pin: req.params.pin });

    if (!file) {
      return res.status(404).json({ message: "Invalid PIN" });
    }

    res.download(file.filepath, file.filename.split("-").slice(1).join("-"));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;