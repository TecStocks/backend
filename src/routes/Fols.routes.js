const express = require('express')
const router = express.Router()
const { FolsController } = require("../controllers");
const { search, list } =
	new FolsController();
// db.stores.find({ $text: { $search: 'java coffee shop' } })

router.get('/search', search);
router.post('/', list);


module.exports = router




    