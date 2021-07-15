let connection = require('../config/db')

class CourrierAction{

    static getAll(cb){
        connection.query('select * from cr_action order by ACTION_ID',(err,data)=>{
            if(err) return cb(err, null)
            return cb(null,{success: true, data})
        })

    }
    static create(newAction, cb){
        connection.query('insert into cr_action set ?',newAction,(err,data)=>{
            if(err)throw err
            return cb(err, { success: true,data})
        })
    }
    static getById(id, cb) {
        connection.query('select * from cr_action where ACTION_ID=?',[parseInt(id)],(err,data)=>{
            if(err)throw err
            return cb(err, { success: true,data})
        })
    }
    static update(newAction,id,cb){

        connection.query('update cr_action set ? where ACTION_ID=?',[newAction,id],(err,data)=>{
            if(err)throw err
            return cb(err, { success: true,data})
        })
    }
    static remove(id, cb) {
        connection.query('delete from cr_action where ACTION_ID=?',[id],(err,data)=>{
            if(err)throw err
            return cb(err, { success: true,data})
        })
    }
    
}
module.exports =CourrierAction