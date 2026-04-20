const express = require("express");
const Product = require("../models/product");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.get("/", async (req, res) => {
    const page = Math.max(Number(req.query.page) || 1, 1);
    const limit = Math.max(Number(req.query.limit) || 100, 1);
    const skip = (page - 1) * limit;

    const [total, data] = await Promise.all([
        Product.countDocuments(),
        Product.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
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

router.get("/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({ message: "Produit introuvable" });
    }

    res.json(product);
});

router.post("/", authMiddleware, async (req, res) => {
    const { name, price, category, image, description, badge } = req.body;

    if (!name || !price || !description) {
        return res.status(400).json({
            message: "Nom, prix et description sont obligatoires",
        });
    }

    const product = await Product.create({
        name,
        price: Number(price),
        category: category || "Maison",
        image: image || "",
        description,
        badge: badge || "Nouveau",
    });

    res.status(201).json(product);
});

router.delete("/:id", authMiddleware, async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
        return res.status(404).json({ message: "Produit introuvable" });
    }

    res.json({ message: "Produit supprimé avec succès" });
});

module.exports = router;