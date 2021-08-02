let connection = require('../config/db')

class CourrierPriorite {
 static getAll(cb) {
  connection.query(
   'select * from cr_priorite order by PRIORITE_ID DESC',
   (err, data) => {
    if (err) return cb(err, null)
    return cb(null, { success: true, data })
   }
  )
 }
 static create(newPriorite, cb){
    connection.query('insert into cr_priorite set ?',newPriorite,(err,data)=>{
        if(err)throw err
        return cb(err, { success: true,data})
    })
}
static getById(id, cb) {
    connection.query('select * from cr_priorite where PRIORITE_ID=?',[parseInt(id)],(err,data)=>{
        if(err)throw err
        return cb(err, { success: true,data})
    })
}
static update(newPriorite,id,cb){

    connection.query('update cr_priorite set ? where PRIORITE_ID=?',[newPriorite,parseInt(id)],(err,data)=>{
        if(err)throw err
        return cb(err, { success: true,data})
    })
}
static remove(id, cb) {
    connection.query('delete from cr_priorite where PRIORITE_ID=?',[parseInt(id)],(err,data)=>{
        if(err)throw err
        return cb(err, { success: true,data})
    })
}
}
module.exports = CourrierPriorite
