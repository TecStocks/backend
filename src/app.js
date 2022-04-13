const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const signup = require('./routes/register')
app.use('/signup', signup)

const login = require('./routes/login')
app.use('/user', login)

const admin = require('./routes/admin')
app.use('/admin', admin)

const fols = require('./routes/fols')
app.use('/fols', fols)

module.exports = app
