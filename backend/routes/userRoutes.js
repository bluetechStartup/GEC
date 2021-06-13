const express = require('express')
const {protect,admin}=require('../middleware/authMiddleware.js')
const {
 getAll,
 register,
 getUserById,
 updateUser,
 login,
} = require('../controllers/userController.js')
const router = express.Router()
router.route('/').get(protect,admin,getAll)
router.route('/:id').get(protect,admin,getUserById).put(protect,admin,updateUser)
router.route('/register').post(protect,admin,register)
router.route('/auth').post(login)

module.exports = router
