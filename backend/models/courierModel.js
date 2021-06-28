let connection = require("../config/db");

class Mdl_courrier {
  static getAll(cb) {
    connection.query(
      `SELECT cr.* , ct.COURRIER_DESCR,sv.SERVICE_DESCR, cv.CIVILITE_DESCR, st.STATUT_DESCR, pr.PRIORITE_DESCR FROM cr_courriers AS cr 
      JOIN cr_categorie_courier AS ct ON ct.CATEGORIE_COURRIER_ID = cr.CATEGORIE_COURRIER_ID 
      JOIN services AS sv ON sv.SERVICE_ID = cr.SERVICE_ID 
      JOIN cr_civilite AS cv ON cv.CIVILITE_ID = cr.CIVILITE_ID  
      JOIN cr_statut AS st ON st.STATUT_ID = cr.STATUT_ID 
      JOIN cr_priorite AS pr ON pr.PRIORITE_ID = cr.PRIORITE_ID 
      ORDER BY cr.COURRIER_ID DESC`,
      (error, methodes) => {
        if (error) throw error;
        cb(error, methodes);
      }
    );
  }

//   PROFIL_ID,FONCTIONNALITE_ID ,STRING
  static getOne(id, cb) {
    connection.query(
      `SELECT * FROM cr_courriers WHERE COURRIER_ID =?  ORDER BY COURRIER_ID DESC`,[id],
      (error, methodes) => {
        if (error) throw error;
        cb(error, methodes);
      }
    );
  }

  static edit(data, id, cb) {
    connection.query(
      `UPDATE cr_courriers SET ? WHERE COURRIER_ID =?`,
      [data, id],
      (error, courrier) => {
        if (error) throw error;
        cb(error, courrier);
      }
    );
  }

  static insert(data, cb) {
    connection.query(
      "INSERT cr_courriers SET ?",
      [data],
      (error, fonctionnalite) => {
        if (error) throw error;
        cb(error, fonctionnalite);
      }
    );
  }

  static insertAnnexe(data, cb) {
    connection.query(
      "INSERT cr_courrier_annexe SET ?",
      [data],
      (error, courrier_annexe) => {
        if (error) throw error;
        cb(error, courrier_annexe);
      }
    );
  }

  static getAnnexes(id, cb) {
    connection.query(
      `SELECT an.*,ct.CATEGORIE_ANNEXE_DESCR,ty.TYPE_ANNEXE_DESCR FROM cr_courrier_annexe AS an 
      JOIN cr_categorie_annexe AS ct ON ct.CATEGORIE_ANNEXE_ID = an.CATEGORIE_ANNEXE_ID 
      JOIN cr_type_annexe AS ty ON ty.TYPE_ANNEXE_ID = an.TYPE_ANNEXE_ID 
      WHERE an.COURRIER_ID = ? ORDER BY COURRIER_ANNEXE_ID DESC`,
      [id],
      (error, annexes) => {
        if (error) throw error;
        cb(error, annexes);
      }
    );
  }

  static removeCourrier(id, cb) {
    connection.query(
      "DELETE FROM cr_courriers WHERE COURRIER_ID = ?",
      [id],
      (error, courrier) => {
        if (error) throw error;
        cb(error, courrier);
      }
    );
  }

  static removeAnnexes(id, cb) {
    connection.query(
      "DELETE FROM cr_courrier_annexe WHERE COURRIER_ID = ?",
      [id],
      (error, annexes) => {
        if (error) throw error;
        cb(error, annexes);
      }
    );
  }

  static removeAnnexe(id, cb) {
    connection.query(
      "DELETE FROM cr_courrier_annexe WHERE COURRIER_ANNEXE_ID = ?",
      [id],
      (error, annexe) => {
        if (error) throw error;
        cb(error, annexe);
      }
    );
  }
}

module.exports = Mdl_courrier;
