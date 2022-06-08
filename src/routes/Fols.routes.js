const express = require('express')
const router = express.Router()
const { FolsController } = require("../controllers");
const { search, list } =
	new FolsController();


router.get('/search', search);
router.post('/', list);


module.exports = router




    