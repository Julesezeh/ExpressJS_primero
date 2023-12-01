const express = require("express");
const axios = require("axios")

const app = express();
app.set("view engine", "ejs")

app.use(express.urlencoded())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/api_form.html")
})

app.post("/", async (req, res) => {
    console.log(req.body.cityName)
    let response = await axios.post(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${"cbd154e0f1c5ef15a3b8eae701d21971"}`)
    console.log("STATUS CODE ", response.status)
    res.json(response.data)
})

//Server runs fine. First commit of December 2023
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})