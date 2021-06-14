const User = require('../models/userModel.js')
const asyncHandler = require('express-async-handler')

// @desc    GET ALL USERS
// @route   GET /api/users/
// @access  Private/admin
const getAll = asyncHandler(async (req, res, next) => {
 User.getAll((err, data) => {
  if (err) throw err
  console.log(data)
  res.json(data)
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
  SERVICE_ID,
 } = req.body
 const user = new User({
  FIRST_NAME,
  LAST_NAME,
  USER_NAME,
  EMAIL,
  TELEPHONE,
  PASSWORD,
  PROFIL_ID,
  SERVICE_ID,
 })

 User.create(user, (err, data) => {
  if (err) {
   return next(new Error('check if all field are filled...'))
  }

  res.json(data)
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
 User.getById(req.params.id, (err, data) => {
  if (err) {
   return next(new Error('no user found..'))
  }
  return res.json(data)
 })
})

// @desc    Update user profile
// @route   PUT /api/users/:id
// @access  Private/admin

const updateUser = asyncHandler(async (req, res, next) => {
 User.update(req.params.id, req.body.profileId, (err, data) => {
  if (err) {
   //    console.log("error from user controller",err)
   return next(new Error('not updated'))
  }
  res.json(data)
 })
})
module.exports = {
 getAll,
 register,
 getUserById,
 login,
 updateUser,
}
