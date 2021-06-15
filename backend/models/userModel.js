const sql = require('../config/db.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = function (user) {
 this.FIRST_NAME = user.FIRST_NAME
 this.LAST_NAME = user.LAST_NAME
 this.USER_NAME = user.USER_NAME
 this.EMAIL = user.EMAIL
 this.TELEPHONE = user.TELEPHONE
 this.PASSWORD = user.PASSWORD
 this.PROFIL_ID = user.PROFIL_ID
 this.SERVICE_ID = user.SERVICE_ID
}

User.create = async (newUser, result) => {
 const addQuery = 'insert into admin_users set ?'
 if (!newUser.PASSWORD) {
  result('password please', null)
 } else {
  newUser.PASSWORD = await bcrypt.hash(newUser.PASSWORD, 10)
  sql.query(addQuery, newUser, (err, data) => {
   if (err) return result(err, null)
   return result(null, { id: data.insertId, ...data })
  })
 }
}

User.login = (credentiels, result) => {
 const { email, password } = credentiels

 const retrieveQuery = 'select * from admin_users where EMAIL = ?'

 sql.query(retrieveQuery, [email], (err, data) => {
  if (err) {
   return result(err, null)
  }
  if (data.length > 0) {
   const isMatch = bcrypt.compareSync(password, data[0].PASSWORD)
   if (!isMatch) {
    return result(null, { success: false, message: 'wrong password..' })
   }
   const token = jwt.sign({ id: data[0].USER_ID }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
   })

   return result(null, { success: true, data: data[0], token })
  }
  return result(null, {
   success: false,
   message: 'there is no user with such email',
  })
 })
}

User.getAll = (result) => {
 const retrieveQuery = 'select * from admin_users'
 sql.query(retrieveQuery, (err, data) => {
  if (err) {
   console.log(err)
   result(err, null)
   return
  }
  console.log('this are data', data)
  result(null, { success: true, count: data.length, data: data })
 })
}

User.update = (userId, profileiD, result) => {
 const updateQuery = `UPDATE admin_users SET PROFIL_ID =${profileiD} WHERE USER_ID=${userId}`
 sql.query(updateQuery, (err, data) => {
  if (err) {
   return result(err, null)
  }
  if (data.affectedRows == 0) {
   return result(null, { success: false, message: 'not updated' })
  }
  result(null, { success: true, data: data })
 })
}
User.findById = (userId) => {
 const retrieveQuery = `SELECT USER_ID,FIRST_NAME,LAST_NAME ,IS_ACTIVE,TELEPHONE,admin_profil.PROFIL_DESCR from admin_users , admin_profil WHERE admin_users.USER_ID=${userId} AND admin_users.PROFIL_ID=admin_profil.PROFIL_ID`
 let user = null
 sql.query(retrieveQuery, (err, data) => {
  if (err) return null
  if (data.length <= 0) {
   console.log('not user found from userModel')
   return null
  }
  user = data
 })
 return user
}
User.getById = async (userId, result) => {
 const retrieveQuery = `SELECT USER_ID,FIRST_NAME,LAST_NAME ,IS_ACTIVE,TELEPHONE,admin_profil.PROFIL_DESCR from admin_users , admin_profil WHERE admin_users.USER_ID=${userId} AND admin_users.PROFIL_ID=admin_profil.PROFIL_ID`
 sql.query(retrieveQuery, (err, data) => {
  if (err) {
   console.log(err)
   result(err, null)
   return
  }
  if (!data.length) {
   result(null, { success: false, message: 'user not found..' })
  }

  result(null, { success: true, data: data[0] })
 })
}

module.exports = User
