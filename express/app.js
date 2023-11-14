const express = require('express');
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send("<h1>It's me again xo xo.</h1>")
})


app.listen(port, () => {
    console.log(`Server is currently listening on 127.0.0.1:${port}`)
})