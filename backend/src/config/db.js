const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ MongoDB connecté");
    } catch (error) {
        console.error("❌ Erreur MongoDB :", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;