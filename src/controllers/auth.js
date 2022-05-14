const User = require('../models/UserSchema')

const authenticate = async (login, password) => {
  let data = await User.findOne({ Login: login, Password: password })
  return data
}

module.exports = authenticate
