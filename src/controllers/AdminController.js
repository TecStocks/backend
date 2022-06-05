const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Fols = require('../models/Fols')
require('dotenv').config()
const User = require('../models/UserSchema')
const Notifications = require('../models/Notificate')



const secret = process.env.SECRET

class AdminController {
  async createUser (req, res) {
    
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      User.create(
      {
        Username: req.body.username,
        Login: req.body.login,
        Password: hashedPassword,
        Equipment: req.body.equipment,
        
      }
      ,
      (err, user) => {
          console.log(err)
          const token = jwt.sign({ id: user._id }, secret, {
              expiresIn: '15m'
          })
          res.status(201).send({ auth: true, token })
      }
    )
         
    } 

    async createFol (req, res) {      
      let { Title, Equipment, Description, Applicability, IssueDescription, Category, Status,IssueDate, RevisionNumber, Keywords, RevisionDate  } = req.body
      // let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      const locale = 'pt-Br'
     let Data = new Date().toLocaleDateString(locale)
     console.log(Data)
      // console.log(typeof(date))
      // console.log('passei')
      
      
      await Fols.create({Data,
        Title, Equipment, Description, Applicability, 'Issue description':IssueDescription, Category, Status,'Issue date':IssueDate, 'Revision number':RevisionNumber, 'Revision date':RevisionDate, Keywords 
      }, 
      (err, fol) => {
        if (err)
        return res.status(500).send('There was a problem creating the Fol')
        
        res.status(201).send(fol)
    })

     await Notifications.create({Data,Equipment})
      res.status(201).send()
     

  }

   async listNotification (req, res) {
    Notifications.find({}, (err, notification) => {
      if (err)
        return res.status(500).send('There was a problem finding notifications')
      res.status(200).send(notification)
    })
  }

  async list(req, res) {
    User.find({}, (err, users) => {
      if (err)
        return res.status(500).send('There was a problem finding the users')
      res.status(200).send(users)
    })
  }

  async listUser(req, res) {
    User.findById(req.params.id, (err, user) => {
      if (err)
        return res.status(500).send('There was a problem finding the user')
      if (!user) return res.status(400).send('No user found.')
      res.status(200).send(user)
    })
  }

  async deleteUser(req, res) {
    User.findByIdAndRemove(req.params.id, (err, user) => {
      if (err) {
        return res.status(500).send('There was a problem deleting the user.')
      }
      res.status(200).send('User:' + user.name + 'was deleted.')
    })
  }

  async updateUser(req, res) {
    User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, user) => {
        if (err)
          return res.status(500).send('There was a problem updating the user.')
        res.status(200).send(user)
      }
    )
  }
}

module.exports = AdminController
