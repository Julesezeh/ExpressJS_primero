const express = require("express");
const app = express();
const host = "127.0.0.1"
const port = 3000







app.listen(port, () => {
    console.log(`Server is currently listening at ${host}:${port}`)
})