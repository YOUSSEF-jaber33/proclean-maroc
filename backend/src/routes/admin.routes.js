const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");
const Order = require("../models/orders");
const Contact = require("../models/contacts");
const Product = require("../models/product");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Champs requis" });
    }

    const admin = await Admin.findOne({ username });

    if (!admin) {
        return res.status(401).json({ message: "Identifiants invalides" });
    }

    const isValid = await bcrypt.compare(password, admin.passwordHash);

    if (!isValid) {
        return res.status(401).json({ message: "Identifiants invalides" });
    }

    const token = jwt.sign(
        { id: admin._id, username: admin.username, role: "admin" },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    res.json({
        success: true,
        token,
        user: {
            id: admin._id,
            username: admin.username,
            role: "admin",
        },
    });
});

router.get("/me", authMiddleware, async (req, res) => {
    res.json({ user: req.user });
});

router.patch("/change-password", authMiddleware, async (req, res) => {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
        return res
            .status(400)
            .json({ message: "Mot de passe actuel et nouveau requis" });
    }

    if (newPassword.length < 6) {
        return res.status(400).json({
            message: "Le nouveau mot de passe doit contenir au moins 6 caractères",
        });
    }

    const admin = await Admin.findById(req.user.id);

    if (!admin) {
        return res.status(404).json({ message: "Admin introuvable" });
    }

    const isValid = await bcrypt.compare(currentPassword, admin.passwordHash);

    if (!isValid) {
        return res.status(401).json({ message: "Mot de passe actuel incorrect" });
    }

    admin.passwordHash = await bcrypt.hash(newPassword, 10);
    await admin.save();

    res.json({ message: "Mot de passe mis à jour avec succès" });
});

router.get("/stats", authMiddleware, async (req, res) => {
    const [productsCount, ordersCount, contactsCount, orders] = await Promise.all([
        Product.countDocuments(),
        Order.countDocuments(),
        Contact.countDocuments(),
        Order.find(),
    ]);

    const totalRevenue = orders.reduce(
        (sum, order) => sum + Number(order.total || 0),
        0
    );

    const statusCounts = {
        nouvelle: 0,
        "en cours": 0,
        traitée: 0,
        livrée: 0,
    };

    orders.forEach((order) => {
        if (statusCounts[order.status] !== undefined) {
            statusCounts[order.status] += 1;
        }
    });

    res.json({
        productsCount,
        ordersCount,
        contactsCount,
        totalRevenue,
        statusCounts,
    });
});

module.exports = router;