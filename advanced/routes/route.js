const router = require("express").Router();
const apiMiddelware = require("../middleware/apiKey");

router.get("/", (req, res) => {
    res.render("index", {
        title: "Howdy Hody Mate"
    })
})

router.get("/chats", (req, res) => {
    res.render("chats", {
        chats: "This is your chats page biatchh"
    })
})

router.get("/api/products/", apiMiddelware, (req, res) => {
    res.json([
        {
            id: 1,
            name: "Cars"
        },
        {
            id: 2,
            name: "Turbans"
        }
    ])
})

module.exports = router;