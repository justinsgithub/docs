const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

 // automatically passes in the req / res
router.route('/').get(protect, getGoals).post(protect, setGoal) 
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

module.exports = router
