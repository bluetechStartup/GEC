let connection = require('../config/db')

class MouvementCourrier{

    static getAll(cb){
        connection.query('select * from cr_mouvements  order by MOUVEMENT_ID  DESC',(err,data)=>{
            if(err) return cb(err, null)
            return cb(null,{success: true, data})
        })

    }
}
module.exports =MouvementCourrier