/* user schema */
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  Username: String,
  Login: String,
  Password: String,
  Equipment: String
})
mongoose.model('User', UserSchema)

module.exports = mongoose.model('User')
