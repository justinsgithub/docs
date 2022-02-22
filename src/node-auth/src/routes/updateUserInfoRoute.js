const jwt = require('jsonwebtoken')
const { ObjectID } = require('mongodb')
const { getDbConnection } = require('../db')

exports.updateUserInfoRoute = {
  path: '/api/users/:userId',
  method: 'put',

  handler: async (req, res) => {

    const { authorization } = req.headers

    const { userId } = req.params

    const updates = (({ favoriteFood, hairColor, bio }) => ({ favoriteFood, hairColor, bio }))(req.body)

    if (!authorization) return res.status(401).json({ message: 'No authorization sent' })

    const token = authorization.split(' ')[1]

    jwt.verify(token, 'mySecretKey', async (err, decoded) => {

      if (err) return res.status(401).json({ message: 'Unable to verify' })

      const { id } = decoded

      if (id !== userId) return res .status(403) .json({ message: 'not allowed to update that user' })

      const db = getDbConnection('react-auth-db')

      const result = await db .collection('users') .findOneAndUpdate( { _id: ObjectID(id) }, { $set: { info: updates } }, { returnOriginal: false })

      const { email, isVerified, info } = result.value

      jwt.sign( { id, email, isVerified, info }, 'mySecretKey', { expiresIn: '2d' }, (err, token) => {

          if (err) return res.status(500).json(err)

          res.status(200).json({ token })

        }
      )
    })
  },
}
