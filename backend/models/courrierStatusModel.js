let connection = require('../config/db')

class CourrierStatus{

    static getAll(cb){
        connection.query('select * from cr_statut order by STATUT_ID DESC',(err,data)=>{
            if(err) return cb(err, null)
            return cb(null,{success: true, data})
        })

    }
}
module.exports =CourrierStatus