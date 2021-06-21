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

 static getOne(id, cb) {
  connection.query(
   'SELECT * FROM admin_profil WHERE PROFIL_ID = ? ORDER BY PROFIL_ID DESC',
   [id],
   (error, resultats) => {
    if (error) return cb(error, null)
    cb(null, { success: true, data: resultats[0] })
   }
  )
 }

 static insert(requete, cb) {
  connection.query(requete, (error, profile) => {
   if (error) return cb(error, null)
   cb(null, { success: true, profile })
  })
 }

 static update(requete, cb) {
  connection.query(requete, (error, profile) => {
   if (error) return cb(error, null)
   cb(null, { success: true, profile })
  })
 }

 static remove(id, cb) {
  connection.query(
   'DELETE FROM admin_profil WHERE PROFIL_ID = ?',
   [id],
   (error, result) => {
    if (error) return cb(error, null)
    cb(null, { success: true, result })
   }
  )
 }

 static getFonctionnalites(id, cb) {
  connection.query(
   `SELECT fn.FONCTIONNALITE_URL,fn.FONCTIONNALITE_ID FROM admin_fonctionnalites AS fn JOIN admin_profil_fonctionnalites AS pfn ON fn.FONCTIONNALITE_ID = pfn.FONCTIONNALITE_ID WHERE pfn.PROFIL_ID = ${id}`,
   (error, data) => {
    if (error) return cb(error, null)
    cb(null, { success: true, data })
   }
  )
 }
}

module.exports = Profile
