const express = require('express')
const { protect, admin } = require('../middleware/authMiddleware.js')

const {
 getAll,
 register,
 getUserById,
 updateUserProfile,
 updateUser,
 login,
 updatePassword,
 resetPassword,
} = require('../controllers/userController.js')
const router = express.Router()
router.route('/').get(getAll).put(protect, updateUser)
router.route('/:id').get(getUserById).put(updateUserProfile)
router.route('/:id/updatepassword').put(updatePassword)
router.route('/resetpassword/:resettoken', resetPassword)

router.route('/register').post(register)
router.route('/auth').post(login)

module.exports = router
