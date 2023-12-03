const express = require("express");

const app = express();

app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.write("Howdy Mate")
    res.send()
})

app.listen(3000, (req, res) => {
    console.log("Listening on port 3000")
})