const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

 // automatically passes in the req / res
router.route('/').get(getGoals).post(setGoal) 
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router
