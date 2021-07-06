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
}
module.exports = CourrierPriorite
