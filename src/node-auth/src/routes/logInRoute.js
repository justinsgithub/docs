const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { getDbConnection } = require('../db')

exports.logInRoute = {
  path: '/api/login',
  method: 'post',
  handler: async (req, res) => {
    const { email, password } = req.body

    const db = getDbConnection('react-auth-db')
    const user = await db.collection('users').findOne({ email })

    if (!user) return res.sendStatus(401)

    const { _id: id, isVerified, passwordHash, info } = user

    const isCorrect = await bcrypt.compare(password, passwordHash)

    if (isCorrect) {
      jwt.sign(
        { id, isVerified, email, info },
        'mySecretKey',
        { expiresIn: '2d' },
        (err, token) => {
          if (err) return res.status(500).json(err)
          return res.status(200).json({ token })
        }
      )
    } else return res.sendStatus(401)
  },
}
