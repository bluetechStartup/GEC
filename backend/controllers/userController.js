const User = require('../models/userModel.js')
const asyncHandler = require('express-async-handler')

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
// @route   PATCH /api/users/:id
// @access  Private
const updateUser = asyncHandler(async (req, res, next) => {
 console.log(req.body)
 // instead of 1 later we will pass a req.user.id
 User.getMe(1, user => {
  console.log('user out here ...', user)
  ;(user.FIRST_NAME = req.body.FIRST_NAME
   ? req.body.FIRST_NAME
   : user.FIRST_NAME),
   (user.LAST_NAME = req.body.LAST_NAME ? req.body.LAST_NAME : user.LAST_NAME),
   (user.USER_NAME = req.body.USER_NAME ? req.body.USER_NAME : user.USER_NAME),
   (user.EMAIL = req.body.EMAIL ? req.body.EMAIL : user.EMAIL),
   (user.TELEPHONE = req.body.TELEPHONE ? req.body.TELEPHONE : user.TELEPHONE),
   console.log('user out here updated...', user)
  // instead of 1 later we will pass a req.user.id
  User.update(user, (err, data) => {
   if (error) return next(new Error(err.message))
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
module.exports = {
 getAll,
 register,
 getUserById,
 login,
 updateUser,
 updateUserProfile,
}
