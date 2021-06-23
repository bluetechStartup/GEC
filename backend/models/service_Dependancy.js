const connection=require('../config/db.js')



class ServiceDependancy{



    static create(newDependancy,cb){
        connection.query("insert into service_dependance set ?",newDependancy,(err,data)=>{
            if(err) return cb(err, null)
            return cb(null,data)
        })

    }
    static getAll(cb) {
        connection.query("select * from service_dependance order by DEP_ID")
    }
}
module.exports =ServiceDependancy