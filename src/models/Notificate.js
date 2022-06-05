const mongoose = require('mongoose')  
 
const NotificateSchema = new mongoose.Schema
({ Data: String,
   Equipment: String
   }) 
   mongoose.model('Notifications', NotificateSchema) 
   
module.exports = mongoose.model('Notifications')