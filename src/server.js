require('dotenv').config()
const app = require('./app')
const db = require('./database/mongodb')
// const populate = require('./services/populateDB')
const check = require('./services/CheckDeletedUsers')

const port = process.env.PORT | 3100

// populate()
check()

const httpServer = require('http').Server(app)

httpServer.listen(port, '0.0.0.0', () => {
  console.log(`Listen on port: ${port}`)
})
