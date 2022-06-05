/* user schema */
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  Username: String,
  Login: String,
  Password: String,
  Equipment: Array
})


mongoose.model('User', UserSchema)

module.exports = mongoose.model('User')
