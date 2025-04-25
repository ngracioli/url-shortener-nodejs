require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connection sucessfull");

        // Rotas
        const urlRoutes = require("./routes/urlRoutes");
        app.use("/", urlRoutes);

        app.get("/", (req, res) => {
            res.send("Working API!");
        });

        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });

    } catch (err) {
        console.error("Database connection error:", err);
        process.exit(1);
    }
}

startServer();