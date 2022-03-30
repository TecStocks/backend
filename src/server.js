require('dotenv').config()
const app = require('./app')
const db = require('./database/mongodb')

const port = process.env.PORT | 3100

const server = app.listen(port, () => {
  console.log(`Express server listening on PORT: ${port}`)
})
