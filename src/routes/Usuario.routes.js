const express = require('express')
const router = express.Router()
const { UsuarioController } = require("../controllers");
const { create, login, token, logout } =
	new UsuarioController();


router.post('/create', create);
router.post('/login', login);
router.get('/me', token)
router.get('/logout', logout)

module.exports = router;