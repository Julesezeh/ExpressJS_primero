const express = require("express");
const host = "localhost";
const port = 3000;


const app = express();

app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/form.html"), { title: "Add two numbers" }
})

app.post("/", (req, res) => {
    console.log("success")
    const numberOne = req.body.firstNumber;
    const numberTwo = req.body.secondNumber;
    const sum = Number(numberOne) + Number(numberTwo)
    res.write(`The summation of the two numbers is ${sum}`);
    res.send();
})

app.listen(3000, (req, res) => {
    console.log(`Listening on ${host}:${port}`)
})