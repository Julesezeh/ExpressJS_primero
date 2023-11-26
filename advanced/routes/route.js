const router = require("express").Router();

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

router.get("/api/products/", (req, res) => {
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