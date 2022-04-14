const User = require('../models/User')
const user_table = require('./loginsjson.json')

const populate = async () => {
  try {
    await User.deleteMany({})
    await User.create(user_table, { upsert: true })
  } catch (err) {
    console.log(err)
  }
}

module.exports = populate

// require('dotenv').config()

// const connectDB = require('./db/connect')
// const Cards = require('./models/cards')

// const deck = require('./data.json')

// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI)
//     await Cards.deleteMany({})
//     await Cards.create(deck)
//     console.log('Success!!')
//     process.exit(0)
//   } catch (error) {
//     console.log(error)
//     process.exit(1)
//   }
// }

// start()
