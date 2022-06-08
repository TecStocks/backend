const mongoose = require('mongoose')  
 
const LocateSchema = new mongoose.Schema
({ cidade: String,
   estado: String
   }) 
   mongoose.model('Location', LocateSchema) 
   
module.exports = mongoose.model('Location')