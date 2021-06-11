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
}

User.create = async (newUser, result) => {
 const addQuery = 'insert into admin_users set ?'
 newUser.PASSWORD = await bcrypt.hash(newUser.PASSWORD, 10)
 sql.query(addQuery, newUser, (err, data) => {
  if (err) return result(err, null)
  result(null, { id: data.insertId, ...data })
 })
}
const comparePassword = async (user, plainPassword) => {
 return await bcrypt.compare(plainPassword, user.PASSWORD)
}
User.login = (credentiels, result) => {
 const { email, password } = credentiels

 const retrieveQuery = 'select * from admin_users where EMAIL = ?'

 sql.query(retrieveQuery, [email], (err, data) => {
  if (err) {
   console.log(err)
   result(null, { success: false, message: 'there is no use with such email' })
   return
  }

  const isMatch = bcrypt.compareSync(password, data[0].PASSWORD)
  if (!isMatch) {
   return result(null, { success: false, message: 'wrong password..' })
  }
  const token = jwt.sign({ id: data[0].USER_ID }, process.env.JWT_SECRET, {
   expiresIn: process.env.JWT_EXPIRE,
  })
  return result(null, { success: true, data: data[0], token })
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

User.getById = async (userId, result) => {
 const retrieveQuery = `select * from admin_users where USER_ID=${userId}`
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
