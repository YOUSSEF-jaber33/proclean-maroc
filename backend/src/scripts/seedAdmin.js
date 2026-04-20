require("dotenv").config();

const bcrypt = require("bcryptjs");
const connectDB = require("../config/db");
const Admin = require("../models/admin");

async function seed() {
    await connectDB();

    const existing = await Admin.findOne({ username: "admin" });

    if (existing) {
        console.log("Admin déjà existant");
        process.exit(0);
    }

    const passwordHash = await bcrypt.hash("123456", 10);

    await Admin.create({
        username: "admin",
        passwordHash,
    });

    console.log("✅ Admin créé : admin / 123456");
    process.exit(0);
}

seed();