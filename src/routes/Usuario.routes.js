const express = require('express')
const router = express.Router()
const { UsuarioController } = require('../controllers')
const { login, token, logout, remove } = new UsuarioController()

// router.post('/create', create)
router.post('/login', login)
router.get('/me', token)
router.get('/logout', logout)
router.post('/remove', remove)
router.use((req,res)=>res.send('Url invalida'))

module.exports = router
