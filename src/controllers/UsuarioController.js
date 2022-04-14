const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../models/User')
const authenticate = require('../controllers/auth')

const secret = process.env.SECRET

// CREATES A NEW USER
class UsuarioController {
    async create (req, res) {
        try {
            /* hash password */

            const hashedPassword = await bcrypt.hash(req.body.password, 10)

            User.create(
                {
                    name: req.body.name,
                    email: req.body.email,
                    password: hashedPassword,
                    equipment: req.body.equipment
                },
                (err, user) => {
                    console.log(err)
                    const token = jwt.sign({ id: user._id }, secret, {
                        expiresIn: '15m'
                    })
                    res.status(201).send({ auth: true, token })
                }
            )
        } catch {
            res.status(500).send('There was a problem registering the user')
        }

        /* insert into db */
    }

    async login (req, res) {
      const login = req.body.login
      const password = req.body.password   
      
      let user
      const data = await authenticate(login, password)
          
      let response = data ? 200 : 401
      
      if (response == 200) {
        user = {
          _id: data._id,
          username: data.Username,
          login: data.Login,
          equipment: data.Equipment
        }
      } else {
        user = {
          auth: false
        }
      }
    
      res.status(response).send(user)
    }

    async token (req, res) {
        const token = req.headers['x-access-token']
        if (!token) {
          return res.status(401).send({ auth: false, message: 'No token provided!' })
        }
      
        jwt.verify(token, secret, (err, decoded) => {
          if (err) {
            return res.status(500).send({
              auth: false,
              message: 'Failed'
            })
          }
      
          User.findById(decoded.id, (err, user) => {
            if (err) {
              return res.status(500).send('There was a problem finding the user')
            }
            if (!user) {
              return res.status(404).send('No user found.')
            }
            res.status(200).send(user)
          })
        })
      }

      async logout (req, res) {
        res.status(200).send({ auth: false, token: null })
      }
      


}

module.exports = UsuarioController
