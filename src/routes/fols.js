const express = require('express')
const router = express.Router()
const Fols = require('../models/Fols')

// db.stores.find({ $text: { $search: 'java coffee shop' } })

router.get('/search', async (req, res) => {
  let keyword = req.query['car'] + ' ' + req.query['keyword']
  const data = await Fols.find({ $text: { $search: keyword } })
  console.log(keyword)
  console.log(data)

  res.status(200)
})

router.post('/', async (req, res) => {
  let car = req.body.car
  // let title = req.body.title
  let status = 'IN EFFECT'

  const data = await Fols.find({ Equipment: car, Status: status })
  res.status(200).send(data)
})

module.exports = router
