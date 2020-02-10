const express = require("express");
const router = express.Router();

let data = require("../public/docs/group.json")

router.get("/", async (req, res)=> {
    console.log(data)
    await res.json(data)
})


module.exports = router