/* fols schema */
 const mongoose = require('mongoose')  
 
 const FolsSchema = new mongoose.Schema
 ({ Data: String,
    Title: String, 
    Equipment: String, 
    Description: String,
    Applicability: String, 
    'Issue description': String, 
    Category: String, 
    Status: String, 
    'Issue date': String, 
    Remarks: String,
    'Revision number': String,
    'Revision date': String,
    Keywords: String }) 
    mongoose.model('Fols', FolsSchema) 
    
 module.exports = mongoose.model('Fols')
