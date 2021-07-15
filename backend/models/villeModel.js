let connection = require('../config/db')

class Ville{

    static getAll(cb){
        connection.query('select * from villes  order by VILLE_ID  DESC',(err,data)=>{
            if(err) return cb(err, null)
            return cb(null,{success: true, data})
        })

    }

    static create(newStatus, cb){
        connection.query('insert into villes set ?',newStatus,(err,data)=>{
            if(err)throw err
            return cb(err, { success: true,data})
        })
    }
    static getById(id, cb) {
        connection.query('select * from villes where VILLE_ID=?',[parseInt(id)],(err,data)=>{
            if(err)throw err
            return cb(err, { success: true,data})
        })
    }
    static update(newStatus,id,cb){
    
        connection.query('update villes set ? where VILLE_ID=?',[newStatus,parseInt(id)],(err,data)=>{
            if(err)throw err
            return cb(err, { success: true,data})
        })
    }
    static remove(id, cb) {
        connection.query('delete from villes where VILLE_ID=?',[parseInt(id)],(err,data)=>{
            if(err)throw err
            return cb(err, { success: true,data})
        })
    }
    
}
module.exports =Ville