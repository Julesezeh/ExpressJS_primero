const http = require('http');

const server = http.createServer((req, res) => {
    const pathName = req.url
    if (pathName === "/slime") {
        res.end("<h1>Hello I'm Jules $lime   </h1>")
    } else if (pathName === "/welcome" || pathName === "/") {
        res.end("<h1>Buenos Dias</h1>")
    } else {
        res.end("<h1>No routes configured</h1>")
    }
})



server.listen(3000, () => {
    console.log("listening on port 3000")
})