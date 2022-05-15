const User = require('../models/UserSchema')
const RemovedUser = require('../models/RemovedUserSchema')
const populate = require('../services/populateDB')


  
const CheckDeletedUsersService = async () => {
    populate()
    try {
      const users = await User.find()
      const removed = await RemovedUser.find()
      console.log(users)

      
    } catch (err) {
    }
  }

  module.exports = CheckDeletedUsersService