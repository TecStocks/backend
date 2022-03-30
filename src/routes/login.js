const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../models/User')

const secret = process.env.SECRET

router.post('/login', async (req, res) => {
  User.findOne({ email: req.body.email }, async (err, user) => {
    if (err) {
      return res.status(500).send('Error on the server.')
    }
    if (!user) {
      return res.status(404).send('No user found')
    }

    try {
      const passwordIsValid = await bcrypt.compare(
        req.body.password,
        user.password
      )
      if (!passwordIsValid) {
        return res.status(401).send({ auth: false, token: null })
      }

      const token = jwt.sign({ id: user._id }, secret, {
        expiresIn: '15m'
      })

      res.status(200).send({ auth: true, token: token })
    } catch {
      res.status(500).send()
    }
  })
})

router.get('/logout', (req, res) => {
  res.status(200).send({ auth: false, token: null })
})

module.exports = router
