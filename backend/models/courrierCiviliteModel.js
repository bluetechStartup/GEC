let connection = require('../config/db')

class CourrierCivilite{

    static getAll(cb){
        connection.query('select * from cr_civilite  order by CIVILITE_ID DESC',(err,data)=>{
            if(err) return cb(err, null)
            return cb(null,{success: true, data})
        })

    }
    static create(newCivilite, cb){
        connection.query('insert into cr_civilite set ?',newCivilite,(err,data)=>{
            if(err)throw err
            return cb(err, { success: true,data})
        })
    }
    static getById(id, cb) {
        connection.query('select * from cr_civilite where CIVILITE_ID=?',[parseInt(id)],(err,data)=>{
            if(err)throw err
            return cb(err, { success: true,data})
        })
    }
    static update(newCivilite,id,cb){

        connection.query('update cr_civilite set ? where CIVILITE_ID=?',[newCivilite,id],(err,data)=>{
            if(err)throw err
            return cb(err, { success: true,data})
        })
    }
    static remove(id, cb) {
        connection.query('delete from cr_civilite where CIVILITE_ID=?',[id],(err,data)=>{
            if(err)throw err
            return cb(err, { success: true,data})
        })
    }
    
}
module.exports =CourrierCivilite