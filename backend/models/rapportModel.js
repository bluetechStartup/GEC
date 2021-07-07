let connection = require('../config/db')

class Rapport {
 static courriers_non_traite_categorie(cb) {
  connection.query(
   `SELECT COUNT(cr.COURRIER_ID) AS NB_COURRIER,ct.CATEGORIE_COURRIER_DESCR FROM cr_courriers AS cr JOIN cr_categorie_courier AS ct ON cr.CATEGORIE_COURRIER_ID = ct.CATEGORIE_COURRIER_ID WHERE cr.STATUT_ID != 3 `,
   (error, data) => {
    if (error) throw error
    cb(error, { success: true, data })
   }
  )
 }

 static courriers_categorie(cb) {
  connection.query(
   `SELECT COUNT(cr.COURRIER_ID) AS NB_COURRIER,ct.CATEGORIE_COURRIER_DESCR FROM cr_courriers AS cr JOIN cr_categorie_courier AS ct ON cr.CATEGORIE_COURRIER_ID = ct.CATEGORIE_COURRIER_ID`,
   (error, data) => {
    if (error) throw error
    cb(error, { success: true, data })
   }
  )
 }
}

module.exports = Rapport
