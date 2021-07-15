let connection = require('../config/db')

class Profile {
 static getAll(cb) {
  connection.query(
   'SELECT * FROM admin_profil ORDER BY PROFIL_ID DESC',
   (error, resultats) => {
    if (error) console.log(error.message)

    cb(error, { success: true, count: resultats.length, data: resultats })
   }
  )
 }

 static getById(id, cb) {
  connection.query(
   'SELECT * FROM admin_profil WHERE PROFIL_ID = ? ORDER BY PROFIL_ID DESC',
   [id],
   (error, data) => {
    if (error) return cb(error, null)
    if(data<=0)return cb(null,{success:false,message:"no user found with such id..."})
    
    cb(null, { success: true, data: data[0]})
   }
  )
 }

 static insert(requete, cb) {
  connection.query(requete, (error, profile) => {
   if (error) return cb(error, null)
   cb(null, { success: true, profile })
  })
 }

 static update(updatedProfile, cb) {
     const {PROFIL_ID,PROFIL_CODE,PROFIL_DESCR}=updatedProfile
     const requete=`update admin_profil set PROFIL_DESCR=?,PROFIL_CODE=? where PROFIL_ID=?`
  connection.query(requete,[PROFIL_DESCR,PROFIL_CODE,PROFIL_ID], (error, profile) => {
   if (error) throw error
   cb(error, { success: true, profile })
  })
 }

 
 static delete(id, cb) {
  connection.query(
   'DELETE FROM admin_profil WHERE PROFIL_ID = ?',
   [id],
   (error, result) => {
    if (error) return cb(error, null)
    cb(null, { success: true, result })
   }
  )
 }

}

module.exports = Profile
