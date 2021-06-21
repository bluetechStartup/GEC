const asyncHandler = require('express-async-handler')
const User = require('../models/userModel.js')
const sql = require('../config/db.js')
const jwt = require('jsonwebtoken')

// protect route
exports.protect = asyncHandler(async (req, res, next) => {
 let token

 if (
  req.headers.authorization &&
  req.headers.authorization.startsWith('Bearer')
 ) {
  token = req.headers.authorization.split('Bearer ')[1]
  console.log(req.headers.authorization.split('Bearer '))
 }

 if (!token) {
  return res.status(403).json({ success: false, message: ' login first...' })
 }

 const decod = jwt.verify(token, process.env.JWT_SECRET)
 console.log(decod)

 const retrieveQuery = `SELECT user.USER_ID,user.FIRST_NAME,user.LAST_NAME ,user.IS_ACTIVE,user.TELEPHONE,prof.PROFIL_CODE from admin_users user,admin_profil prof  WHERE user.USER_ID=${decod.id} AND user.PROFIL_ID=prof.PROFIL_ID`
 sql.query(retrieveQuery, (err, user) => {
  if (err) throw err

  if (user.length > 0) {

   req.user = user[0]

  return next()
   
  }
   res.json({
   success: false,
   message: `user logged with ${decod.id} as id no longer exist `,
  })
 })
})
exports.admin = asyncHandler(async (req, res, next) => {

 if (req.user && req.user.PROFIL_CODE !== 'ADMIN') {
return res
   .status(403)
   .json({ success: false, message: 'only admin can execute this task...' })
 }
 next()
})
