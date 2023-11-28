const express = require("express");
const axios = require("axios")

const app = express();
app.set("view engine", "ejs")


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/api_form.html")
})

app.post("/", async (req, res) => {

    // const city = req.body.get("cityName")

    await axios.post(`https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${"cbd154e0f1c5ef15a3b8eae701d21971"}`)
        .then((response) => (res.json(response.data)))
        .catch((error) => (console.log(error)))
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})