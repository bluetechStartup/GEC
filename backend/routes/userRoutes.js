const express = require('express')
const { protect, admin } = require('../middleware/authMiddleware.js')

const {
 getAll,
 register,
 getUserById,
 updateUserProfile,
 updateUser,
 login,
} = require('../controllers/userController.js')
const router = express.Router()
router.route('/').get(getAll)
router
 .route('/:id')
 .get(getUserById)
 .put(updateUserProfile)
 .patch(updateUser)
router.route('/register').post(register)
router.route('/auth').post(login)

module.exports = router
