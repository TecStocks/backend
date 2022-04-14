const express = require('express')
const router = express.Router()
require('dotenv').config()
const User = require('../models/User')
const authenticate = require('../controllers/auth')

router.post('/login', async (req, res) => {
  const login = req.body.login
  const password = req.body.password

  const data = await authenticate(login, password)
  console.log(data)

  let response = data ? 200 : 401
  res.sendStatus(response)
})

router.get('/logout', (req, res) => {
  res.status(200).send({ auth: false, token: null })
})

module.exports = router
