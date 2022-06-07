const User = require('../models/UserSchema')
const checkLogin = require('./validateLogin')

const authenticate = async (login, password) => {
  if(checkLogin(login) && checkLogin(password)){
    let data = await User.findOne({ Login: login, Password: password })
  }
  return data
}

module.exports = authenticate
