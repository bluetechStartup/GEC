let connection = require('../config/db')

class MouvementCourrier{

    static getAll(cb){
        connection.query('select * from cr_mouvements  order by MOUVEMENT_ID  DESC',(err,data)=>{
            if(err) return cb(err, null)
            return cb(null,{success: true, data})
        })

    }

    static create(newMouvement, cb){
        connection.query('insert into cr_mouvements set ?',newMouvement,(err,data)=>{
            if(err)throw err
            return cb(err, { success: true,data})
        })
    }
    static getById(id, cb) {
        connection.query('select * from cr_mouvements where MOUVEMENT_ID=?',[parseInt(id)],(err,data)=>{
            if(err)throw err
            return cb(err, { success: true,data})
        })
    }
    static update(newMouvement,id,cb){

        connection.query('update cr_mouvements set ? where MOUVEMENT_ID=?',[newMouvement,id],(err,data)=>{
            if(err)throw err
            return cb(err, { success: true,data})
        })
    }
    static remove(id, cb) {
        connection.query('delete from cr_mouvements where MOUVEMENT_ID=?',[id],(err,data)=>{
            if(err)throw err
            return cb(err, { success: true,data})
        })
    }
}
module.exports =MouvementCourrier