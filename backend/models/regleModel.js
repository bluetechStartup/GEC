let connection = require('../config/db')

class Regles {
 static getAll(cb) {
  connection.query(`SELECT * FROM rg_regles`, (error, data) => {
   if (error) return cb(error, null)
   cb(error, { success: true, data })
  })
 }

 static getByCategorie(CATEGORIE_COURRIER_ID, cb) {
  connection.query(
   `SELECT * FROM rg_regles WHERE CATEGORIE_COURRIER_ID = ?`,
   [CATEGORIE_COURRIER_ID],
   (error, data) => {
    if (error) throw error
    cb(error, { success: true, data })
   }
  )
 }

 static getOne(id, cb) {
  connection.query(
   'SELECT * FROM rg_regles WHERE REGLE_ID = ?',
   [id],
   (error, resultats) => {
    cb(error, { success: true, data: resultats[0] })
   }
  )
 }

 static insert(newRegle, cb) {
  connection.query(`INSERT INTO rg_regles SET ?`, [newRegle], (error, data) => {
   if (error) return cb(error, null)
   cb(null, { success: true, data })
  })
 }

 static update(data, id, cb) {
  connection.query(
   `UPDATE rg_regles SET ? WHERE REGLE_ID =?`,
   [data, id],
   (error, data) => {
    return cb(error, { success: true, data })
   }
  )
 }

 static remove(id, cb) {
  connection.query(
   'DELETE FROM rg_regles WHERE REGLE_ID = ?',
   [id],
   (error, data) => {
    if (error) throw error
    return cb(error, { success: true, data })
   }
  )
 }

 static removeByCategory(id, cb) {
  connection.query(
   'DELETE FROM rg_regles WHERE CATEGORIE_COURRIER_ID = ?',
   [id],
   (error, data) => {
    if (error) throw error
    cb(error, { success: true, data })
   }
  )
 }

 static checkCourriers(cd) {
  connection.query(
   `SELECT cr.* FROM cr_courriers AS cr `,
   [CATEGORIE_COURRIER_ID],
   (error, data) => {
    if (error) throw error
    cb(error, { success: true, data })
   }
  )
 }
}

module.exports = Regles
