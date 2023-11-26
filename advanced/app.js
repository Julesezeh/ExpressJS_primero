const express = require("express");
const app = express();
const allRoutes = require("./routes/route.js");

app.set('view engine', 'ejs');



app.use(allRoutes);




app.listen(3000, () => {
    console.log("server is listening on port 3000")
})