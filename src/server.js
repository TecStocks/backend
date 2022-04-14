require('dotenv').config()
const app = require('./app')
const db = require('./database/mongodb')
const populate = require('./services/populateDB')

const port = process.env.PORT | 3100

populate()

const server = app.listen(port, () => {
  console.log(`Express server listening on PORT: ${port}`)
})
