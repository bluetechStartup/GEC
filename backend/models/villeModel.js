let connection = require('../config/db')

class Ville{

    static getAll(cb){
        connection.query('select * from villes  order by VILLE_ID  DESC',(err,data)=>{
            if(err) return cb(err, null)
            return cb(null,{success: true, data})
        })

    }
}
module.exports =Ville