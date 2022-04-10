const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const User = require('../models/User')

router.use(bodyParser.json())

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err)
      return res.status(500).send('There was a problem finding the users')
    res.status(200).send(users)
  })
})

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) return res.status(500).send('There was a problem finding the user')
    if (!user) return res.status(400).send('No user found.')
    res.status(200).send(user)
  })
})

// DELETES A USER FROM THE DATABASE
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) {
      return res.status(500).send('There was a problem deleting the user.')
    }
    res.status(200).send('User:' + user.name + 'was deleted.')
  })
})

//UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', (req, res) => {
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
})

module.exports = router
