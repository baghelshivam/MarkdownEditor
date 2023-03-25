const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("markdownPad.ejs");
});

module.exports = router;