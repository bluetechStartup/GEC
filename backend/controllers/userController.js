const User = require('../models/userModel.js')
const asyncHandler = require('express-async-handler')
const sendEmail = require('../utils/sendEmail.js')

// @desc    GET ALL USERS
// @route   GET /api/users/
// @access  Private/admin
const getAll = asyncHandler(async (req, res, next) => {
 User.getAll((err, users) => {
  if (err) throw new Error(err.message)
  res.json(users)
 })
})

// @desc    CREATE USER
// @route   POST /api/users/register
// @access  Private/admin
const register = asyncHandler(async (req, res, next) => {
 const {
  FIRST_NAME,
  LAST_NAME,
  USER_NAME,
  EMAIL,
  TELEPHONE,
  PASSWORD,
  PROFIL_ID,
 } = req.body
 const newUser = {
  FIRST_NAME,
  LAST_NAME,
  USER_NAME,
  EMAIL,
  TELEPHONE,
  PASSWORD,
  PROFIL_ID,
 }
 console.log('THIS IS new user', newUser)

 User.create(newUser, (err, user) => {
  if (err) return next(new Error(err.message))
  return res.json(user)
 })
})

// @desc    LOGIN USER
// @route   POST /api/users/auth
// @access  PUBLIC
const login = asyncHandler(async (req, res, next) => {
 const { email, password } = req.body

 User.login({ email, password }, (err, data) => {
  if (err) {
   return next(new Error(err.message))
  }
  res.json(data)
 })
})

// @desc    GET user by ID
// @route   GET /api/users/:id
// @access  Private/admin
const getUserById = asyncHandler(async (req, res, next) => {
 if (req.params.id == '' || req.params.id == undefined) {
  return res.json({ success: false, message: 'error de parametre' })
 } else
  User.findById(req.params.id, (err, user) => {
   if (err) return next(new Error(err.message))
   return res.json(user)
  })
})

// @desc    Update user profile
// @route   PUT /api/users
// @access  Private
const updateUser = asyncHandler(async (req, res, next) => {
 // instead of 1 later we will pass a req.user.id
 User.getMe(req.user.USER_ID, (err, user) => {
  console.log('user out here ...', user)
  ;(user.FIRST_NAME = req.body.FIRST_NAME
   ? req.body.FIRST_NAME
   : user.FIRST_NAME),
   (user.LAST_NAME = req.body.LAST_NAME ? req.body.LAST_NAME : user.LAST_NAME),
   (user.USER_NAME = req.body.USER_NAME ? req.body.USER_NAME : user.USER_NAME),
   (user.EMAIL = req.body.EMAIL ? req.body.EMAIL : user.EMAIL),
   (user.TELEPHONE = req.body.TELEPHONE ? req.body.TELEPHONE : user.TELEPHONE),
   // instead of 1 later we will pass a req.user.id
   User.update(user, (err, data) => {
    if (err) return next(new Error(err.message))
    res.json(data)
   })
 })
})

// @desc    Update user profile
// @route   PUT /api/users/:id
// @access  Private/admin

const updateUserProfile = asyncHandler(async (req, res, next) => {
 User.updateProfile(req.params.id, req.body.PROFIL_ID, (err, data) => {
  if (err) return next(new Error(err.message))
  res.json(data)
 })
})
const updatePassword = asyncHandler(async (req, res, next) => {
 const { OLD_PASSWORD, NEW_PASSWORD } = req.body

 if (
  (OLD_PASSWORD && OLD_PASSWORD.trim() == '') ||
  OLD_PASSWORD == undefined ||
  (NEW_PASSWORD && NEW_PASSWORD.trim() == '') ||
  NEW_PASSWORD == undefined
 ) {
  return res.json({
   success: false,
   message: 'un ou plusieurs champs sont vide....',
  })
 }
 // const newPass={OLD_PASSWORD,NEW_PASSWORD,req.params.id}
 User.updatePassword(
  { OLD_PASSWORD, NEW_PASSWORD, USER_ID: req.params.id },
  (err, data) => {
   if (err) return next(new Error(err.message))
   return res.json(data)
  }
 )
})
const forgetPassword = asyncHandler(async (req, res, next) => {
 const { EMAIL } = req.body
 console.log(EMAIL)
 if (EMAIL === '') {
  return res.json({ success: false, message: 'Votre email est incorrect !' })
 }
 User.findByEmail(EMAIL, async (err, user) => {
  if (err) return next(new Error(err.message))
  const { success, data } = user
  if (success) {
   const resetPassword = await User.getResetPasswordToken(EMAIL)

   const url = `http://localhost:3000/reset_password/${resetPassword}`
   console.log('the url ready to be sent line 142 userController', url)
   //  localhost:3000/reset_password/:token

   const message = `nous vous avons envoyer cette email car peut etre vous ou quelqu'un d'autre a demmande de reinitialiser le mot de pass confirm en clickant ici ${url}`

   try {
    sendEmail({
     email: EMAIL,
     subject: 'token du motdepass ',
     message,
    })
    return res.json({ success: true, message: 'email sent..' })
   } catch (error) {
    User.initiateToNull(EMAIL)
    return res.json({ success: false, message: "email hasn't been sent!!" })
   }
  } else res.json(user)
 })
})

const resetPassword = asyncHandler(async (req, res, next) => {
 console.log('token from front:', req.params.resettoken)
 // console.log('this is token after hashing', plainToken)
 User.finByToken(req.params.resettoken, req.body.newPassword, (err, data) => {
  if (err) return next(new Error(err.message))

  console.log('data oute here 168 userController', data)

  return res.json(data)
 })
 //  return res.json(data)
})

const getUsersByService= asyncHandler(async (req, res, next) => {

  User.getUserByservice(req.params.id,(err,data)=>{
    if(err) return next(new Error(err.message))
    res.json(data)
  })
})

module.exports = {
 getAll,
 register,
 getUserById,
 login,
 updateUser,
 updateUserProfile,
 updatePassword,
 forgetPassword,
 resetPassword,
 getUsersByService
}
