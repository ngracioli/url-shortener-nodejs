const express = require("express");
const router = express.Router();
const { nanoid } = require("nanoid");
const Url = require("../models/Url");

function formatUrl(url, host) {
    return {
        id: url._id,
        originalUrl: url.originalUrl,
        shortUrl: `http://${host}/${url.shortCode}`,
        shortCode: url.shortCode,
        createdAt: new Date(url.createdAt).toLocaleString("pt-BR", {
            dateStyle: "short",
            timeStyle: "short",
        }),
    };
}

router.get("/urls", async (req, res) => {
    try {
        const urls = await Url.find();
        const response = urls.map((url) => formatUrl(url, req.headers.host));
        res.json(response);
    } catch (err) {
        res.status(500).json({ error: "URL list error." });
    }
});

router.delete("/urls/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const url = await Url.findByIdAndDelete(id);
        if (url) {
            res.json({ message: "URL deleted successfully." });
        } else {
            res.status(404).json({ error: "URL not found." });
        }
    } catch (err) {
        res.status(500).json({ error: "URL deletion error." });
    }
});

router.delete("/urls/deleteall", async (req, res) => {
    try {
        await Url.deleteMany();
        res.json({ message: "All URLs deleted successfully." });
    } catch (err) {
        res.status(500).json({ error: "Error deleting all URLs." });
    }
});

router.post("/shorten", async (req, res) => {
    const { originalUrl } = req.body;
    if (!originalUrl)
        return res.status(400).json({ error: "URL is required." });

    try {
        const shortCode = nanoid(6);
        const newUrl = await Url.create({ originalUrl, shortCode });
        res.json(formatUrl(newUrl, req.headers.host));
    } catch (err) {
        res.status(500).json({ error: "URL shortening error." });
    }
});

router.get("/:shortCode", async (req, res) => {
    const { shortCode } = req.params;
    try {
        const url = await Url.findOne({ shortCode });
        if (url) {
            res.redirect(url.originalUrl);
        } else {
            res.status(404).json({ error: "URL not found." });
        }
    } catch (err) {
        res.status(500).json({ error: "URL access error." });
    }
});

module.exports = router;
