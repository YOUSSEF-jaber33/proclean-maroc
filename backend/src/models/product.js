const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      default: "Maison",
      trim: true,
    },
    image: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    badge: {
      type: String,
      default: "Nouveau",
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);