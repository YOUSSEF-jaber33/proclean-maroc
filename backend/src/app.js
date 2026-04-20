const express = require("express");
const cors = require("cors");
const path = require("path");

const adminRoutes = require("./routes/admin.routes");
const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes");
const contactRoutes = require("./routes/contact.routes");
const uploadRoutes = require("./routes/upload.routes");

const app = express();

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
    })
);

app.use(express.json());

// IMPORTANT : rendre les images uploadées accessibles
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
    res.send("Backend ProClean Maroc version 10 en ligne");
});

app.use("/admin", adminRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/contacts", contactRoutes);
app.use("/upload", uploadRoutes);

module.exports = app;