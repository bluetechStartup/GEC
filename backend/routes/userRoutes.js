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
 forgetPassword,
 resetPassword,
} = require('../controllers/userController.js')
const router = express.Router()
router.route('/').get(getAll).put(protect, updateUser)
router.route('/:id').get(getUserById).put(updateUserProfile)
router.route('/:id/updatepassword').put(updatePassword)
router.route('/forgetPassword').post(forgetPassword)
router.route('/resetpassword/:resettoken').post(resetPassword)
// POST /api/users/resetpassword/:resettoken

router.route('/register').post(register)
router.route('/auth').post(login)

module.exports = router
