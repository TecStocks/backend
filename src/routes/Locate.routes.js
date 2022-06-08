const express = require('express')
const router = express.Router()
const { Locations } = require("../controllers");
const { locate } =
	new Locations();


router.post('/', locate);


module.exports = router