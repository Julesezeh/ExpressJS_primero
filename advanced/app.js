const express = require("express");
const app = express();
const host = "127.0.0.1"
const port = 3000
const path = require("path");
// const ejs = require('ejs');


app.set('view engine', 'ejs')
console.log(app.get('views'))

// app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render('index')
})


app.get("/chats", (req, res) => {
    res.render('chats')
})


app.listen(port, () => {
    console.log(`Server is currently listening at ${host}:${port}`)
})