let connection = require('../config/db')

class Courrier {
   
 static getAll(orderBy,category,search,cb) {

       let request=''
       if(category && search){
         request=`SELECT * FROM cr_courriers WHERE CATEGORIE_COURRIER_ID=${parseInt(category)} AND REFERENCE LIKE '${search}%' ORDER BY DATE_ENREGISTREMENT DESC`
       }else if(category){
          request=`SELECT * FROM cr_courriers WHERE CATEGORIE_COURRIER_ID=${parseInt(category)} ORDER BY DATE_ENREGISTREMENT DESC`
       }else if(search){
         request=`SELECT * FROM cr_courriers WHERE REFERENCE LIKE '${search}%' ORDER BY DATE_ENREGISTREMENT DESC`
           
       }else {
         request=orderBy?`SELECT * FROM cr_courriers ORDER BY ${orderBy} DESC`:`SELECT * FROM cr_courriers ORDER BY DATE_ENREGISTREMENT DESC`
         
         }

  connection.query(request,
   (error, data) => {
    if (error)return cb(error, null)
    cb(error, {success:true,count: data.length,data})
   }
  )
 }

 //   PROFIL_ID,FONCTIONNALITE_ID ,STRING
 static getById(id, cb) {
    const request='SELECT cr.COURRIER_ID,cr.DATE_RECEPTION ,cr.DATE_COURRIER,cr.DATE_ENREGISTREMENT,cr.OBJET,cr.EXPEDITEUR_IDENTITE,cr.EXPEDITEUR_ADDRESSE,cm.MOUVEMENT_DESCR,ct.COURRIER_DESCR,cp.PRIORITE_DESCR,cv.CIVILITE_DESCR,v.VILLE_DESCR,sv.SERVICE_DESCR,ca.ACTION_DESCR,ad.FIRST_NAME,ad.LAST_NAME,cst.STATUT_DESCR FROM cr_courriers cr LEFT JOIN  cr_mouvements cm on cr.MOUVEMENT_ID=cm.MOUVEMENT_ID LEFT join cr_categorie_courier ct ON cr.CATEGORIE_COURRIER_ID=ct.CATEGORIE_COURRIER_ID LEFT join cr_priorite cp on cr.PRIORITE_ID=cp.PRIORITE_ID LEFT join cr_civilite cv on cr.CIVILITE_ID=cv.CIVILITE_ID LEFT join villes v on cr.EXPEDITEUR_VILLE_ID=v.VILLE_ID LEFT join services sv on cr.SERVICE_ID=sv.SERVICE_ID left join cr_action ca on cr.ACTION_ID=ca.ACTION_ID left join admin_users ad on cr.USER_ID=ad.USER_ID LEFT join cr_statut cst on cr.STATUT_ID=cst.STATUT_ID  WHERE cr.COURRIER_ID =?'

  connection.query(request,
   [parseInt(id)],
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
  c*onnection.query(
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
 static courriersByservice(category,search,id,cb){
    const request=category?`select cr.REFERENCE,cr.COURRIER_ID,cr.REFERENCE,cr.DATE_RECEPTION,cr.DATE_COURRIER,cr.DATE_ENREGISTREMENT,cr.OBJET,ca.ACTION_DESCR from cr_courriers cr LEFT join cr_action ca on cr.ACTION_ID=ca.ACTION_ID  WHERE cr.REFERENT_USER_ID=? and cr.CATEGORIE_COURRIER_ID=${parseInt(category)}`:`select cr.REFERENCE,cr.COURRIER_ID,cr.REFERENCE,cr.DATE_RECEPTION,cr.DATE_COURRIER,cr.DATE_ENREGISTREMENT,cr.OBJET,ca.ACTION_DESCR from cr_courriers cr join cr_action ca on cr.ACTION_ID=ca.ACTION_ID  WHERE cr.REFERENT_USER_ID=?`
   connection.query(request,[parseInt(id)],(err,data)=>{
      if(err) throw err
      cb(err, {success: true,count:data.length, data})
   })
 }
}

module.exports = Courrier
