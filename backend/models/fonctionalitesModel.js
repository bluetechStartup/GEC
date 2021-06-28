let connection = require("../config/db");

class Fonctionnalite {
  static getAll(cb) {
    connection.query(
      "SELECT * FROM admin_fonctionnalites ORDER BY FONCTIONNALITE_ID DESC",
      (error, data) => {
        if (error) return cb(error, null);

        cb(null, {success:true,data});
      }
    );
  }

  static getOne(id, cb) {
    connection.query(
      `SELECT * FROM admin_fonctionnalites WHERE FONCTIONNALITE_ID=? ORDER BY FONCTIONNALITE_ID DESC`,
      [id],
      (error, resultats) => {
        if (error) return cb(error, null);
        console.log("resultats[0]",resultats[0])
        cb(null, {success:true,data:resultats[0]?resultats[0]:null});
      }
    );
  }

  static create(data, cb) {
    connection.query(
      `INSERT INTO admin_fonctionnalites SET ?`,
      [data],
      (error, fonctionnalite) => {
        if (error) return cb(error, null);
        cb(null, {success:true,data:fonctionnalite});
      }
    );
  }

  static update(newFonctionnalite, cb) {
      const {FONCTIONNALITE_URL,FONCTIONNALITE_DESCR,FONCTIONNALITE_ID}=newFonctionnalite
      const requete="update admin_fonctionnalites set FONCTIONNALITE_URL=?,FONCTIONNALITE_DESCR=? where FONCTIONNALITE_ID=?"
    connection.query(requete,[FONCTIONNALITE_URL,FONCTIONNALITE_DESCR,FONCTIONNALITE_ID], (error, data) => {
      if (error) return cb(error, null);
      cb(null,{success:true,data});
    });
  }

  static remove(id, cb) {
    connection.query(
      "DELETE FROM admin_fonctionnalites WHERE FONCTIONNALITE_ID = ?",
      [id],
      (error, data) => {
        if (error) return cb(error, null);
        
      cb(null,{success:true,data});
        
      }
    );
  }
}

module.exports = Fonctionnalite;
