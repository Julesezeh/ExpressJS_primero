const express = require("express");
const app = express();
const host = "127.0.0.1"
const port = 3000
const path = require("path");



app.use(express.static('public'))

// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname + "\\index.html"))
// })

// app.get("/chats", (req, res) => {
//     res.sendFile(path.resolve(__dirname + "\\chats.html"))
// })


app.listen(port, () => {
    console.log(`Server is currently listening at ${host}:${port}`)
})