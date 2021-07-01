let connection = require('../config/db')

class CategoryAnnexe{

    static getAll(cb){
        connection.query('select * from cr_categorie_annexe order by CATEGORIE_ANNEXE_ID',(err,data)=>{
            if(err) return cb(err, null)
            return cb(null,{success: true, data})
        })

    }
}
module.exports =CategoryAnnexe