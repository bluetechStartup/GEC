
const connection = require('../config/db.js')


class AdminFonc_Prof{


// PROFIL SPECIFICATION FONCTIONALITY WITH IT METHODS=select adP.METHODS_GRANTED, FN.FONCTIONNALITE_URL from admin_fonctionnalites FN,(SELECT adfn.METHODS_GRANTED,adfn.PROFIL_ID,adfn.FONCTIONNALITE_ID  FROM admin_profil_fonctionnalites adfn join admin_profil ad on adfn.PROFIL_ID=ad.PROFIL_ID  WHERE ad.PROFIL_ID=1 and adfn.FONCTIONNALITE_ID=1 GROUP by adfn.PROFIL_ID)adP WHERE FN.FONCTIONNALITE_ID=adP.FONCTIONNALITE_ID
// PROFIL WITH ROUTES=SELECT ADP.METHODS_GRANTED,ADP.FONCTIONNALITE_ID ,FN.FONCTIONNALITE_URL FROM admin_fonctionnalites FN, (select AFN.FONCTIONNALITE_ID,AFN.METHODS_GRANTED,AFN.PROFIL_ID FROM admin_profil_fonctionnalites AFN,(select PROFIL_ID FROM admin_profil WHERE PROFIL_CODE="utilisateur")pro WHERE pro.PROFIL_ID=AFN.PROFIL_ID)ADP WHERE FN.FONCTIONNALITE_ID=ADP.FONCTIONNALITE_ID GROUP BY FN.FONCTIONNALITE_ID
static getAll(cb) {
    connection.query(
     `SELECT * FROM admin_profil_fonctionnalites ORDER BY PROFIL_FONCTIONNALITE_ID DESC`,
     (error, data) => {
      if (error) return cb(error, null)
      cb(null, { success: true, data })
     }
    )
   }
 static create(newProf_fonct,cb){
     const {PROFIL_ID,FONCTIONNALITE_ID,METHODS_GRANTED}=newProf_fonct

     connection.query('insert into admin_profil_fonctionnalites set ?')

     
 }

//    U HAVE TO PASS PROFIL_CODE FROM FRONTEND
static getAllFonctionnalitesForSingleProfil(prof_code, cb){
    console.log("profil_code",prof_code)
    const requete="SELECT ADP.METHODS_GRANTED,ADP.FONCTIONNALITE_ID ,FN.FONCTIONNALITE_URL FROM admin_fonctionnalites FN, (select AFN.FONCTIONNALITE_ID,AFN.METHODS_GRANTED,AFN.PROFIL_ID FROM admin_profil_fonctionnalites AFN,(select PROFIL_ID FROM admin_profil WHERE PROFIL_CODE=?)pro WHERE pro.PROFIL_ID=AFN.PROFIL_ID)ADP WHERE FN.FONCTIONNALITE_ID=ADP.FONCTIONNALITE_ID GROUP BY FN.FONCTIONNALITE_ID"
    connection.query(requete,[prof_code.trim()],(err,data)=>{
        if(err) return cb(err, null)
        console.log("this are data from getAllFonctionnalitesForSingleProfil",data)
        return cb(null,{success:true, data})
    })
}
// HERE U HAVE TO PASS  SPECIFIC PROFIL AND THE ROUTES THEN I WILL RETURN METHODS OF 
//THAT PROFIL TO THAT SPECIFIC ROUTE 
static getFonctionnaliteWithSpecificProfil(PROFIL_ID,FONCTIONNALITE_ID, cb){
    const requete='select adP.METHODS_GRANTED, FN.FONCTIONNALITE_URL from admin_fonctionnalites FN,(SELECT adfn.METHODS_GRANTED,adfn.PROFIL_ID,adfn.FONCTIONNALITE_ID  FROM admin_profil_fonctionnalites adfn join admin_profil ad on adfn.PROFIL_ID=ad.PROFIL_ID  WHERE ad.PROFIL_ID=? and adfn.FONCTIONNALITE_ID=? GROUP by adfn.PROFIL_ID)adP WHERE FN.FONCTIONNALITE_ID=adP.FONCTIONNALITE_ID'    
connection.query(requete,[PROFIL_ID,FONCTIONNALITE_ID],(err,data)=>{
    if(err) return cb(err, null)
    return cb(null,{success: true, data,count:data.length})
})
}
}
module.exports =AdminFonc_Prof