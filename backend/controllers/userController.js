const User = require('../models/userModel.js')
const asyncHandler = require('express-async-handler')

const getAll = asyncHandler(async (req, res, next) => {
 User.getAll((err, data) => {
  if (err) throw err
  console.log(data)
  res.json(data)
 })
})
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
 const user = new User({
  FIRST_NAME,
  LAST_NAME,
  USER_NAME,
  EMAIL,
  TELEPHONE,
  PASSWORD,
  PROFIL_ID,
 })
 console.log(user)

 User.create(user, (err, data) => {
  if (err) throw err
  console.log(data)
  res.json(data)
 })
})
const login = asyncHandler(async (req, res, next) => {
 const { email, password } = req.body

 User.login({ email, password }, (err, data) => {
  if (err) {
   throw err
  }
  res.json(data)
 })
})
const getUserById = asyncHandler(async (req, res, next) => {
 User.getById(req.params.id, (err, data) => {
  if (err) throw err
  return res.json(data)
 })
})
module.exports = {
 getAll,
 register,
 getUserById,
 login,
}
