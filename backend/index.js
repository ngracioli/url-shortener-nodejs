require("dotenv").config();

const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connection sucessfull");
    } catch (err) {
        console.error("Error:", err);
    }
}

connectDB();

app.get("/", (req, res) => {
    res.send("working!");
});

app.listen(port, () => {
    console.log(`Running in ${port}`);
});
