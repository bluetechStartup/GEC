let connection = require('../config/db')

class CourrierAction{

    static getAll(cb){
        connection.query('select * from cr_action order by ACTION_ID',(err,data)=>{
            if(err) return cb(err, null)
            return cb(null,{success: true, data})
        })

    }
}
module.exports =CourrierAction