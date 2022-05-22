const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const login = require('./routes/Usuario.routes')
app.use('/user', login)

const admin = require('./routes/Admin.routes')
app.use('/admin', admin)

const fols = require('./routes/Fols.routes')
app.use('/fols', fols)

const hello = require('./routes/hello.routes')
app.use('/', hello)

module.exports = app
