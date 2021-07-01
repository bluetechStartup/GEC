let connection = require('../config/db')

class CategoryCourrier{

    static getAll(cb){
        connection.query('select * from cr_categorie_courier  order by CATEGORIE_COURRIER_ID DESC',(err,data)=>{
            if(err) return cb(err, null)
            return cb(null,{success: true, data})
        })

    }
}
module.exports =CategoryCourrier