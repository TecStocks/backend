require('dotenv').config()
const app = require('./app')
const db = require('./database/mongodb')
// const populate = require('./services/populateDB')
const check = require('./services/CheckDeletedUsers')

const port = process.env.PORT | 3100

// populate()
check()

const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Express server listening on PORT: ${port}`)
})
