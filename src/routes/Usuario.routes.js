const express = require('express')
const router = express.Router()
const { UsuarioController } = require('../controllers')
const { create, login, token, logout, remove } = new UsuarioController()

router.post('/create', create)
router.post('/login', login)
router.get('/me', token)
router.get('/logout', logout)
router.delete('/remove', remove)

module.exports = router
