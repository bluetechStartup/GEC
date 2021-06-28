
const connection=require('../config/db.js')

//   data: courriers,
//   message: `Les courriers`,
//   type: "success",
//   success: true,


class Hierarchie{
    static getAll(cb) {

        connection.query("select * from hierarchie order by HIERARCHIE_ID desc ",(err,data)=>{
            if(err) return cb(err, null)
            if (data.length > 0) {
                return cb(null,data)
                
            }else return cb(null,data="no data yet")
        })

    }
    static getById(id,cb){
        console.log("this is id",id)
        connection.query("select * from hierarchie where HIERARCHIE_ID=?",[id],(err,data)=>{
            if(err) return cb(err, null)

            return cb(null,{success:true,data:data[0]})
        })

    }
    static create(newHieararchie,cb){

        connection.query("insert into hierarchie set ?",newHieararchie,(err,data)=>{
            if(err)return cb(err, null)
            return cb(null,data)

        })

    }
    static update(newHieararchie,cb){
        const {HIERARCHIE_CODE,HIERARCHIE_DESCR,HIERARCHIE_ID}=newHieararchie

        connection.query(`update hierarchie set HIERARCHIE_CODE=?, HIERARCHIE_DESCR=? where HIERARCHIE_ID=?`,[HIERARCHIE_CODE,HIERARCHIE_DESCR,HIERARCHIE_ID],(err,data)=>{
            if(err)return cb(err, null)
            return cb(null,data)
  
        })
    }
    static delete(id,cb){
        connection.query('delete from hierarchie where HIERARCHIE_ID=?',[id],(err,data)=>{
            if(err) return cb(err, null)
            return cb(null,data)
        })
   }

}
module.exports =Hierarchie
