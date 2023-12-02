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

    //Query parameters
    const city = req.body.cityName;
    const apiKey = "cbd154e0f1c5ef15a3b8eae701d21971";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    let response = await axios.post(url)

    //API response data
    console.log("STATUS CODE ", response.status)
    console.log(response.data)
    const data = response.data;
    const weather = data.weather[0].main;
    const description = data.weather[0].description

    const icon = data.weather[0].icon
    const image_url = `http://openweathermap.org/img/wn/${icon}@2x.png`

    // res.json(response.data)
    //Get the image 

    res.write(`<p>The weather in ${city} is ${weather}</p>`)
    res.write(`<p>The weather description in ${city} is ${description} </p>`)
    res.write(`<img src=${image_url} />`)
    res.send();
})

//Server runs fine. First commit of December 2023
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})