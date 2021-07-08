let connection = require('../config/db')

class Courrier {
 static getAll(cb) {
  connection.query(
   `SELECT cr.* , ct.COURRIER_DESCR,sv.SERVICE_DESCR, cv.CIVILITE_DESCR, st.STATUT_DESCR, pr.PRIORITE_DESCR FROM cr_courriers AS cr 
      JOIN cr_categorie_courier AS ct ON ct.CATEGORIE_COURRIER_ID = cr.CATEGORIE_COURRIER_ID 
      JOIN services AS sv ON sv.SERVICE_ID = cr.SERVICE_ID 
      JOIN cr_civilite AS cv ON cv.CIVILITE_ID = cr.CIVILITE_ID  
      JOIN cr_statut AS st ON st.STATUT_ID = cr.STATUT_ID 
      JOIN cr_priorite AS pr ON pr.PRIORITE_ID = cr.PRIORITE_ID 
      ORDER BY cr.COURRIER_ID DESC`,
   (error, data) => {
    if (error)return cb(error, null)
    cb(error, {success:true,count: data.length,data})
   }
  )
 }

 //   PROFIL_ID,FONCTIONNALITE_ID ,STRING
 static getById(id, cb) {
  connection.query(
   `SELECT * FROM cr_courriers WHERE COURRIER_ID =?  ORDER BY COURRIER_ID DESC`,
   [id],
   (error, data) => {
    if (error) throw error
    cb(error, {success:true,data:data[0]})
   }
  )
 }

 static update(data, id, cb) {
  connection.query(
   `UPDATE cr_courriers SET ? WHERE COURRIER_ID =?`,
   [data, id],
   (error, courrier) => {
    if (error) return cb(error, null)
    cb(null, {success: true, data:courrier})
   }
  )
 }

 static create(data, cb) {
  connection.query('INSERT cr_courriers SET ?', [data], (err, data) => {
   if (err) return cb(err, null)
   cb(null, { success: true, data })
  })
 }

 static createAnnexe(data, cb) {
  connection.query(
   'INSERT cr_courrier_annexe SET ?',
   [data],
   (error, data) => {
    if (error) return cb(error, null)
    cb(error, {success: true, data})
   }
  )
 }

 static getAnnexes(id, cb) {
  connection.query(
   `SELECT an.*,ct.CATEGORIE_ANNEXE_DESCR,ty.TYPE_ANNEXE_DESCR FROM cr_courrier_annexe AS an 
      JOIN cr_categorie_annexe AS ct ON ct.CATEGORIE_ANNEXE_ID = an.CATEGORIE_ANNEXE_ID 
      JOIN cr_type_annexe AS ty ON ty.TYPE_ANNEXE_ID = an.TYPE_ANNEXE_ID 
      WHERE an.COURRIER_ID = ? ORDER BY COURRIER_ANNEXE_ID DESC`,
   [id],
   (error, data) => {
    if (error) return cb(error, null)
    cb(null, { success: true, data })
   }
  )
 }

 static removeCourrier(id, cb) {
  connection.query(
   'DELETE FROM cr_courriers WHERE COURRIER_ID = ?',
   [id],
   (error, data) => {
    if (error) return cb(error, null)

    cb(null, { success: true,data})
   }
  )
 }

 static removeAnnexes(id, cb) {
  connection.query(
   'DELETE FROM cr_courrier_annexe WHERE COURRIER_ID = ?',
   [id],
   (error, data) => {
    if (error) return cb(error, null)
    cb(error, { success: true, data })
   }
  )
 }

 static removeAnnexe(id, cb) {
  connection.query(
   'DELETE FROM cr_courrier_annexe WHERE COURRIER_ANNEXE_ID = ?',
   [id],
   (error, data) => {
    if (error) return cb(error, null)
    cb(null, { success: true, data})
   }
  )
 }
 static courriersByservice(id,cb){

   connection.query("select cra.*,cr.* from admin_users ad join cr_courriers cr on ad.SERVICE_ID = cr.SERVICE_ID JOIN cr_courrier_annexe cra on cr.COURRIER_ID= cr.COURRIER_ID WHERE ad.SERVICE_ID=? GROUP by cr.COURRIER_ID",[parseInt(id)],(err,data)=>{
      if(err) throw err
      cb(err, {success: true,count:data.length, data})
   })
 }
}

module.exports = Courrier
