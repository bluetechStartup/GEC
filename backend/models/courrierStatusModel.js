let connection = require('../config/db')

class CourrierStatus{

    static getAll(cb){
        connection.query('select * from cr_statut order by STATUT_ID DESC',(err,data)=>{
            if(err) return cb(err, null)
            return cb(null,{success: true, data})
        })

    }

 static create(newStatus, cb){
    connection.query('insert into cr_statut set ?',newStatus,(err,data)=>{
        if(err)throw err
        return cb(err, { success: true,data})
    })
}
static getById(id, cb) {
    connection.query('select * from cr_statut where STATUT_ID=?',[parseInt(id)],(err,data)=>{
        if(err)throw err
        return cb(err, { success: true,data})
    })
}
static update(newStatus,id,cb){

    connection.query('update cr_statut set ? where STATUT_ID=?',[newStatus,parseInt(id)],(err,data)=>{
        if(err)throw err
        return cb(err, { success: true,data})
    })
}
static remove(id, cb) {
    connection.query('delete from cr_statut where STATUT_ID=?',[parseInt(id)],(err,data)=>{
        if(err)throw err
        return cb(err, { success: true,data})
    })
}

}
module.exports =CourrierStatus