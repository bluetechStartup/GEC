const connection = require('../config/db.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class User {
 static async create(newUser, cb) {

  newUser.PASSWORD = await bcrypt.hash(newUser.PASSWORD, 10)

  connection.query('insert into admin_users set ?', newUser, (err, data) => {
   if (err) return cb(err, null)
   return cb(null, { success: true, data })
  })
 }
 static login(credentiels, cb) {
  const { email, password } = credentiels

  connection.query(
   'select * from admin_users where EMAIL = ?',
   [email],
   (err, data) => {
    if (err) return cb(err, null)

    if (data.length > 0) {
     const isMatch = bcrypt.compareSync(password, data[0].PASSWORD)
     if (!isMatch) {
      return cb(null, { success: false, message: 'wrong password..' })
     }
     const token = jwt.sign({ id: data[0].USER_ID }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
     })

     return cb(null, { success: true, data: data[0], token })
    } else
     return cb(null, {
      success: false,
      message: 'there is no user with such email',
     })
   }
  )
 }
 // THIS IS A SMALL HELPFUL METHODE TO GET ONLY A USER...
 static getMe = (userId, cb) => {
  const retrieveQuery = `SELECT user.USER_ID,user.FIRST_NAME,user.LAST_NAME,user.USER_NAME,user.EMAIL ,user.IS_ACTIVE,user.TELEPHONE,prof.PROFIL_CODE from admin_users user ,admin_profil prof  WHERE user.USER_ID=${userId} AND prof.PROFIL_ID=user.PROFIL_ID`
  connection.query(retrieveQuery, (err, data) => {
   if (err) return cb(err, null)
   if (data.length > 0) {
    return cb(null, data[0])
   } else
    return cb(null, { success: false, message: 'error acured retry again !!' })
  })
 }
 static getSpecificUserRouteInfo=()=>{
  // SELECT * FROM `admin_profil_fonctionnalites`WHERE PROFIL_ID = (SELECT PROFIL_ID FROM admin_users WHERE USER_NAME="soso") and FONCTIONNALITE_ID=1
 }
 static getAll(cb) {
  connection.query(
   'SELECT * FROM admin_users ORDER BY PROFIL_ID DESC',
   (error, data) => {
    if (error) return cb(error, null)
    cb(null, { success: true, count: data.length, data })
   }
  )
 }

 static findById(id, cb) {
  connection.query(
   'SELECT user.USER_ID,user.FIRST_NAME,user.LAST_NAME ,user.IS_ACTIVE,user.TELEPHONE,prof.PROFIL_CODE from admin_users user ,admin_profil prof  WHERE user.USER_ID=? AND prof.PROFIL_ID=user.PROFIL_ID',
   [id],
   (error, data) => {
    if (error) return cb(error, null)
    if (data.length > 0) {
     return cb(null, { success: true, data: data[0] })
    } else return cb(null, { success: false, message: 'no user found' })
   }
  )
 }
 static update(newInfo, cb) {
  const { USER_ID, FIRST_NAME, LAST_NAME, USER_NAME, EMAIL, TELEPHONE } =
   newInfo
  const requete = `update admin_users set FIRST_NAME='${FIRST_NAME}', LAST_NAME='${LAST_NAME}', USER_NAME='${USER_NAME}', EMAIL='${EMAIL}', TELEPHONE='${TELEPHONE}' where USER_ID=${USER_ID}`
  connection.query(requete, (error, data) => {
   if (error) return cb(error, null)
   cb(null, { success: true, data })
  })
 }
 static updateProfile(userId, profileiD, cb) {
  const requete = `UPDATE admin_users SET PROFIL_ID =${profileiD} WHERE USER_ID=${userId}`
  connection.query(requete, (error, data) => {
   if (error) return cb(error, null)
   cb(null, { success: true, data })
  })
 }
 // static updatePassword(){

 // }
 // static getResetPasswordToken(){

 // }
}
module.exports = User
