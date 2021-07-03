let connection = require('../config/db')

class CourrierCivilite{

    static getAll(cb){
        connection.query('select * from cr_civilite  order by CIVILITE_ID DESC',(err,data)=>{
            if(err) return cb(err, null)
            return cb(null,{success: true, data})
        })

    }
}
module.exports =CourrierCivilite