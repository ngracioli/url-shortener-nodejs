const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("working!");
});

app.listen(port, () => {
    console.log(`Running in ${port}`);
});
