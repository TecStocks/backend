const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../models/UserSchema')

const secret = process.env.SECRET

class AdminController {
  async list(req, res) {
    User.find({}, (err, users) => {
      if (err)
        return res.status(500).send('There was a problem finding the users')
      res.status(200).send(users)
    })
  }

  async listUser(req, res) {
    User.findById(req.params.id, (err, user) => {
      if (err)
        return res.status(500).send('There was a problem finding the user')
      if (!user) return res.status(400).send('No user found.')
      res.status(200).send(user)
    })
  }

  async deleteUser(req, res) {
    User.findByIdAndRemove(req.params.id, (err, user) => {
      if (err) {
        return res.status(500).send('There was a problem deleting the user.')
      }
      res.status(200).send('User:' + user.name + 'was deleted.')
    })
  }

  async updateUser(req, res) {
    User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, user) => {
        if (err)
          return res.status(500).send('There was a problem updating the user.')
        res.status(200).send(user)
      }
    )
  }
}

module.exports = AdminController
