const express = require("express");

const app = express();

app.use(express.urlencoded());


const users = [
    {
        "firstName": "Peter",
        "lastName": "Parker",
        "country": "Nigeria"
    },
    {
        "firstName": "King",
        "lastName": "Cobra",
        "country": "Nicaragua"
    },
    {
        "firstName": "Philip",
        "lastName": "I",
        "country": "Macedonia"
    }


]


app.get("/", (req, res) => {
    res.send(users)
    console.log(users)
})

app.listen(3000, (req, res) => {
    console.log("Listening on port 3000")
})