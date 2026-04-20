const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

const uploadDir = path.join(__dirname, "..", "uploads");

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;
        cb(null, uniqueName);
    },
});

const upload = multer({ storage });

router.post("/", authMiddleware, upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "Aucune image reçue" });
    }

    const baseUrl =
        process.env.BACKEND_URL || `http://localhost:${process.env.PORT || 5000}`;

    res.status(201).json({
        message: "Image uploadée",
        imageUrl: `${baseUrl}/uploads/${req.file.filename}`,
    });
});

module.exports = router;