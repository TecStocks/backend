const Location = require('../models/LocationSchema')

require('dotenv').config()

class Locations {
    async locate (req,res) {
      const { cidade, estado } = req.body
  
      await Location.create({
        cidade, estado
      }, 
      (err, locations) => {
        if (err)
        return res.status(500).send('There was a problem getting location')
        
        res.status(201).send(locations)
        console.log(locations)
    })  
  }
}
  
  module.exports = Locations
  