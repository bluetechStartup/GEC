let connection = require('../config/db')

class CategoryCourrier{

    static getAll(cb){
        connection.query('select * from cr_categorie_courier  order by CATEGORIE_COURRIER_ID DESC',(err,data)=>{
           
          if(err)throw err
            return cb(err,{success: true, count:data?.length,data})
        })
    }
    static getOne(id, cb) {
        connection.query(
          "SELECT * FROM cr_categorie_courier WHERE CATEGORIE_COURRIER_ID = ? ORDER BY CATEGORIE_COURRIER_ID DESC",
          [id],
          (error, data) => {
            if (error) throw error;
            cb(error, {success: true, data});
          }
        );
      }
    
      static insert(newCategory, cb) {
        connection.query(
          `INSERT INTO cr_categorie_courier SET ?`,
          [newCategory],
          (error, data) => {
            if (error) throw error;
            cb(error, {success: true, data});
            
          }
        );
      }
    
      static update(newCategory, id, cb) {
        connection.query(
          `UPDATE cr_categorie_courier SET ? WHERE CATEGORIE_COURRIER_ID =?`,
          [newCategory, id],
          (error, data) => {
            if (error) throw error;
            cb(error, {success: true, data});
            
          }
        );
      }
    
      static remove(id, cb) {
        connection.query(
          "DELETE FROM cr_categorie_courier WHERE CATEGORIE_COURRIER_ID = ?",
          [id],
          (error, data) => {
            if (error) throw error;
            cb(error, {success: true, data});
            
          }
        );
      }
}
module.exports =CategoryCourrier