const express = require("express");
const Order = require("../models/orders");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/", async (req, res) => {
    const { customerName, customerPhone, items, total } = req.body;

    if (!customerName || !customerPhone || !items || !items.length) {
        return res.status(400).json({
            message: "Nom, téléphone et produits sont obligatoires",
        });
    }

    const order = await Order.create({
        customerName,
        customerPhone,
        items,
        total: Number(total || 0),
    });

    res.status(201).json({
        message: "Commande enregistrée avec succès",
        order,
    });
});

router.get("/", authMiddleware, async (req, res) => {
    const page = Math.max(Number(req.query.page) || 1, 1);
    const limit = Math.max(Number(req.query.limit) || 10, 1);
    const skip = (page - 1) * limit;

    const [total, data] = await Promise.all([
        Order.countDocuments(),
        Order.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
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

router.patch("/:id/status", authMiddleware, async (req, res) => {
    const { status } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
        return res.status(404).json({ message: "Commande introuvable" });
    }

    order.status = status || order.status;
    await order.save();

    res.json({
        message: "Statut mis à jour",
        order,
    });
});

router.get("/export/all", authMiddleware, async (req, res) => {
    const orders = await Order.find().sort({ createdAt: -1 });

    res.json({
        exportedAt: new Date().toISOString(),
        count: orders.length,
        orders,
    });
});

module.exports = router;