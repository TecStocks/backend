const jwt = require('jsonwebtoken')

function verifyJWT(req, res, next) {
  const token = req.headers['x-access-token']
  if (!token)
    return res
      .status(401)
      .send({ auth: false, message: 'Token não informado.' })

  jwt.verify(token, secret, function (err, decoded) {
    if (err)
      return res.status(500).send({ auth: false, message: 'Token inválido.' })

    req.userId = decoded.id
    console.log('User Id: ' + decoded.id)
    next()
  })
}

export default verifyJWT
