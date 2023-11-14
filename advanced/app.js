const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Howdy mate</h1>")
})

app.listen(3000, () => {
    console.log("Currently listening on 127.0.0.1:3000")
})