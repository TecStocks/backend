const Fols = require('../models/Fols')
const User = require('../models/User')

require('dotenv').config()


class FolsController {
    
async search(req, res) {
    let keyword = req.query['car'] + ' ' + req.query['keyword']
    const data = await Fols.find({ $text: { $search: keyword } })
  
    res.status(200).send(data)
   
  }
  
  async list (req, res){
    let car = req.body.car
    // let title = req.body.title
    let status = 'IN EFFECT'
  
    const data = await Fols.find({ Equipment: car, Status: status })
    res.status(200).send(data)
  }
}

module.exports = FolsController