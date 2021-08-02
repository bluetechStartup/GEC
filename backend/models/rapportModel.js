let connection = require('../config/db')

class Rapport {
 static courriers_non_traite_categorie(cb) {
  connection.query(
   `select count(cr.COURRIER_ID) NB_COURRIER,ct.COURRIER_DESCR from cr_courriers cr join cr_categorie_courier ct on cr.CATEGORIE_COURRIER_ID=ct.CATEGORIE_COURRIER_ID where cr.STATUT_ID =1`,
   (error, data) => {
    if (error) throw error
    cb(error, { success: true, data })
   }
  )
 }

 static courriers_en_cours(cb) {
  connection.query(
   `select count(cr.COURRIER_ID) NB_COURRIER,ct.COURRIER_DESCR from cr_courriers cr join cr_categorie_courier ct on cr.CATEGORIE_COURRIER_ID=ct.CATEGORIE_COURRIER_ID where cr.STATUT_ID =2`,
   (error, data) => {
    if (error) throw error
    cb(error, { success: true, data })
   }
  )
 }
 static courriers_suspendu(cb) {
  connection.query(
   `select count(cr.COURRIER_ID) NB_COURRIER,ct.COURRIER_DESCR from cr_courriers cr join cr_categorie_courier ct on cr.CATEGORIE_COURRIER_ID=ct.CATEGORIE_COURRIER_ID where cr.STATUT_ID =3`,
   (error, data) => {
    if (error) throw error
    cb(error, { success: true, data })
   }
  )
 }

 //  static courriers_categorie(cb) {
 //   connection.query(
 //    `select count(cr.COURRIER_ID) NB_COURRIER,ct.COURRIER_DESCR from cr_courriers cr join cr_categorie_courier ct on cr.CATEGORIE_COURRIER_ID=ct.CATEGORIE_COURRIER_ID where cr.STATUT_ID !=1`,
 //    (error, data) => {
 //     if (error) throw error
 //     cb(error, { success: true, data })
 //    }
 //   )
 //  }
}

module.exports = Rapport
