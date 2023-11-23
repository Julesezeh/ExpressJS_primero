const express = require("express");
const app = express();

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render("index", { title: "Howdy" })
})

app.get("/chat", (req, res) => {
    res.render("chats", { chats: "Here are your chats" })
})

app.listen(3000, () => {
    console.log("server is listening on port 3000")
})