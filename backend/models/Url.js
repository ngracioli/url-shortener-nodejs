const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
    {
        originalUrl: {
            type: String,
            required: true,
            trim: true,
            match: /^https?:\/\/.+/i,
        },
        shortCode: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 5,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            immutable: true,
        },
    },
    {
        versionKey: false,
    }
);

module.exports = mongoose.model("Url", urlSchema);
