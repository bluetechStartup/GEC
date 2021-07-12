const connection = require('../config/db.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { v4: uuidv4 } = require('uuid')

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
   'select adm.USER_ID,adm.USER_NAME,adm.PASSWORD,adm.FIRST_NAME,adm.LAST_NAME,adm.EMAIL,prof.PROFIL_DESCR,adm.SERVICE_ID,adm.IS_ACTIVE FROM admin_users adm , admin_profil prof where adm.EMAIL=? GROUP BY adm.USER_ID',
   [email],
   (err, data) => {
    if (err) return cb(err, null)
    if (data.length <= 0)
     return cb(null, { success: false, message: 'email invalid..' })
    if (data[0].IS_ACTIVE <= 0)
     return cb(null, {
      success: false,
      message: `${data[0].USER_NAME} IS CURRENTLY DEACTIVATED....`,
     })
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
  const retrieveQuery = `SELECT user.USER_ID,user.FIRST_NAME,user.LAST_NAME,user.USER_NAME,user.EMAIL ,user.IS_ACTIVE,user.TELEPHONE,prof.PROFIL_CODE from admin_users user ,admin_profil prof  WHERE user.USER_ID=? AND prof.PROFIL_ID=user.PROFIL_ID`
  connection.query(retrieveQuery, [userId], (err, data) => {
   if (err) return cb(err, null)
   if (data.length > 0) {
    return cb(null, data[0])
   } else
    return cb(null, { success: false, message: 'error acured retry again !!' })
  })
 }
 static getSpecificUserRouteInfo = () => {
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
   'SELECT user.USER_ID,user.PROFIL_ID,user.FIRST_NAME,user.LAST_NAME , user.USER_NAME, user.EMAIL,user.TELEPHONE,prof.PROFIL_CODE from admin_users user ,admin_profil prof  WHERE user.USER_ID=? AND prof.PROFIL_ID=user.PROFIL_ID',
   [id],
   (error, data) => {
    if (error) return cb(error, null)
    return cb(null, { success: true, data: data[0] })
   }
  )
 }
 static update(newInfo, cb) {
  const { USER_ID, FIRST_NAME, LAST_NAME, USER_NAME, EMAIL, TELEPHONE } =
   newInfo
  const requete = `update admin_users set FIRST_NAME=?, LAST_NAME=?, USER_NAME=?, EMAIL=?, TELEPHONE=? where USER_ID=?`
  connection.query(
   requete,
   [FIRST_NAME, LAST_NAME, USER_NAME, EMAIL, TELEPHONE, USER_ID],
   (error, data) => {
    if (error) return cb(error, null)
    cb(null, { success: true, data })
   }
  )
 }
 static updateProfile(userId, profileiD, cb) {
  const requete = `UPDATE admin_users SET PROFIL_ID =${profileiD} WHERE USER_ID=${userId}`
  connection.query(requete, (error, data) => {
   if (error) return cb(error, null)
   if (data.changedRows < 0) {
    error.message = 'not updated'
    return cb(error, null)
   }
   cb(null, { success: true, data })
  })
 }

 static async updatePassword(newUpdate, cb) {
  const { OLD_PASSWORD, NEW_PASSWORD, USER_ID } = newUpdate
  // console.log('this is data from body from userModel ', newUpdate)

  const hashedPassword = await bcrypt.hash(NEW_PASSWORD, 10)
  connection.query(
   'select * from admin_users where USER_ID=?',
   [USER_ID],
   (err, data) => {
    if (err) return cb(err, null)

    const isMatch = bcrypt.compareSync(OLD_PASSWORD, data[0].PASSWORD)
    if (!isMatch) return cb(null, { success: false, message: 'wrong password' })
    connection.query(
     'update admin_users set PASSWORD=? WHERE USER_ID=?',
     [String(hashedPassword), parseInt(USER_ID)],
     (err, data) => {
      if (err) return cb(err, null)
      return cb(null, { success: true, message: 'password updated' })
     }
    )
   }
  )
 }
 static initiateToNull(EMAIL) {
  connection.query(
   'update admin_users set PASSWORD_RESET_TOKEN=null,RESET_PASSWORD_EXPIRE=null where EMAIL=? '[
    EMAIL
   ],
   (err, data) => {
    if (err) throw err
    console.log('succeffully set to null...')
   }
  )
 }

 static findByEmail(EMAIL, cb) {
  connection.query(
   'select * from admin_users where EMAIL=?',
   [EMAIL],
   (err, data) => {
    if (err) return cb(err, null)

    if (data.length <= 0)
     return cb(null, { success: false, message: 'wrong email' })
    return cb(null, { success: true, data: data[0] })
   }
  )
 }

 static async finByToken(resetToken, newPassword, cb) {
  const hashedPassword = await bcrypt.hash(newPassword, 10)
  connection.query(
   `select * from admin_users where PASSWORD_RESET_TOKEN=? and RESET_PASSWORD_EXPIRE >${Date.now()}`,
   [resetToken],
   (err, data) => {
    if (err) return cb(err, null)
    console.log('data here userModel 168', data)
    if (data && data.length <= 0) {
     return cb(null, { success: false, message: 'le token est expirE...' })
    }

    connection.query(
     `update admin_users set PASSWORD=? where USER_ID=?`,
     [String(hashedPassword), parseInt(data[0].USER_ID)],
     (err, response) => {
      if (err) {
       console.log(err)
       return cb(err, null)
      }
      console.log('the response 181 userModel', response)

      if (response.effectedRows <= 0)
       console.log('not updated line 178 from userModel', response)
      return cb(null, { success: true, message: 'welcome....' })
     }
    )

    return data
   }
  )
 }
 static async getResetPasswordToken(EMAIL) {
  // Generate token

  const resetToken = uuidv4()

  // ENCRYPT
  const resetPassordToken = await bcrypt.hash(resetToken, 10)
  const tok = String(resetPassordToken).replace(/\./g, "").replace(/\//g, "")
  
  console.log("token sent:",tok)

  const expireTime = Date.now() + 30 * 60 * 1000
  connection.query(
   'update admin_users set PASSWORD_RESET_TOKEN=?,RESET_PASSWORD_EXPIRE=? where EMAIL=?',
   [tok, expireTime, EMAIL],
   (err, data) => {
    if (err) throw err
    if (data.affectedRows <= 0) {
     console.log('not updated userModel line 206')
    }
   }
  )
  return tok
 }
 static getUserByservice(id,cb){
   connection.query('select  * from admin_users where SERVICE_ID=?',[parseInt(id)],(err,data)=>{
     if(err)throw err
     cb(err,data)
   })

 }
}
module.exports = User
