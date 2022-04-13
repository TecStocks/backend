/* fols schema */
const mongoose = require('mongoose')

const FolsSchema = new mongoose.Schema({
  Title: String,
  Equipment: String,
  Applicability: String,
  'Issue description': String,
  Category: String,
  Status: String,
  'Issue date': String,
  Remarks: String,
  Keywords: String
})
mongoose.model('Fols', FolsSchema)

module.exports = mongoose.model('Fols')
