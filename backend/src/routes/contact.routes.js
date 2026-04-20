const express = require("express");
const Contact = require("../models/contacts");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            message: "Nom, email et message sont obligatoires",
        });
    }

    const contact = await Contact.create({
        name,
        email,
        message,
    });

    res.status(201).json({
        message: "Demande envoyée avec succès",
        contact,
    });
});

router.get("/", authMiddleware, async (req, res) => {
    const page = Math.max(Number(req.query.page) || 1, 1);
    const limit = Math.max(Number(req.query.limit) || 10, 1);
    const skip = (page - 1) * limit;

    const [total, data] = await Promise.all([
        Contact.countDocuments(),
        Contact.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
    ]);

    res.json({
        data,
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
    });
});

module.exports = router;