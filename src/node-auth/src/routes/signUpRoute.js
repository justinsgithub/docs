const { getDbConnection } = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signUpRoute = {
  path: '/api/signup',
  method: 'post',
  handler: async (req, res) => {
    const { email, password } = req.body

    console.log(email,password)
    const db = getDbConnection('react-auth-db')

    const user = await db.collection('users').findOne({ email })
    console.log(user)

    if (user) {
      return res.status(409).send('already registered')
    }

    const passwordHash = await bcrypt.hash(password, 10)

    console.log(passwordHash)

    const startingInfo = {
      hairColor: '',
      favoriteFood: '',
      bio: '',
    }

    const result = await db
      .collection('users')
      .insertOne({ email, passwordHash, info: startingInfo, isVerified: false })

    const { insertedId } = result

    console.log(insertedId)

    jwt.sign(
      { id: insertedId, email, info: startingInfo, isVerified: false },
      'mySecretKey',
      { expiresIn: '2d' },
      (err, token) => {
        if (err) {
          console.log(err)
          return res.status(500).send(err)
        }
        return res.status(201).json({ token })
      }
    )
  },
}
