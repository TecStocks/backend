const express = require('express')
const app = express()
const cors = require('cors')
const router = express.Router()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const login = require('./routes/login')
app.use('/user', login)

module.exports = app
