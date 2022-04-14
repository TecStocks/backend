const express = require('express')
const router = express.Router()
require('dotenv').config()
const User = require('../models/User')
const authenticate = require('../controllers/auth')

router.post('/login', async (req, res) => {
  const login = req.body.login
  const password = req.body.password

  let user
  const data = await authenticate(login, password)
  let response = data ? 200 : 401

  if (response == 200) {
    user = {
      _id: data._id,
      username: data.Username,
      login: data.Login,
      equipment: data.Equipment
    }
  } else {
    user = {
      auth: false
    }
  }

  res.status(response).send(user)
})

router.get('/logout', (req, res) => {
  res.status(200).send({ auth: false, token: null })
})

module.exports = router
