let connection = require('../config/db')

class Regles {
 static getAll(cb) {
     
  connection.query(`select * from rg_regles`, (error, data) => {
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
   'select * from rg_regles where REGLE_ID=?',
   [id],
   (error, resultats) => {
       console.log("this is the resultats from line 27 regleModel",resultats)
    cb(error, { success: true,data:resultats[0]?resultats[0]: resultats})
   }
  )
 }

 static insert(newRegle, cb) {
     const { NOMBRE_HEURE, CATEGORIE_COURRIER_ID, PERSONE_ID }=newRegle


  connection.query('insert into rg_regles set ?',{NOMBRE_HEURE, CATEGORIE_COURRIER_ID, PERSONE_ID }, (error, data) => {
   if (error) 
       throw error
   cb(error, { success: true, data })
  })
 }

 static update(data, id, cb) {
  connection.query(
   `update rg_regles set ? where REGLE_ID=?`,
   [data, id],
   (error, data) => {
    return cb(error, { success: true, data })
   }
  )
 }

 static remove(id, cb) {
  connection.query(
   'delete from rg_regles where REGLE_ID=?',
   [id],
   (error, data) => {
    if (error) throw error
    return cb(error, { success: true, data })
   }
  )
 }

}

module.exports = Regles
