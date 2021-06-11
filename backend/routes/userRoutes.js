const express = require('express')

const {
 getAll,
 register,
 getUserById,
 login,
} = require('../controllers/userController.js')
const router = express.Router()
router.route('/').get(getAll)
router.route('/:id').get(getUserById)
router.route('/register').post(register)
router.route('/auth').post(login)

module.exports = router
