const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema(
  {
    productId: String,
    name: String,
    price: Number,
    quantity: Number,
    image: String,
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
    },
    customerPhone: {
      type: String,
      required: true,
      trim: true,
    },
    items: {
      type: [orderItemSchema],
      required: true,
      validate: [(v) => v.length > 0, "La commande doit contenir des produits"],
    },
    total: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ["nouvelle", "en cours", "traitée", "livrée"],
      default: "nouvelle",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);