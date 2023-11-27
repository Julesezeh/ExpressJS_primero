function api_key(req, res, next) {
    if (req.query.api_key && req.query.api_key == 445566) {
        console.log("Successful")

    } else {
        console.log("Unsuccessful")
        res.json({ error: "Access denied" })
    }
    next();

}

module.exports = api_key;