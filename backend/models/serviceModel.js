const connection = require('../config/db.js')
const Dependancy = require('../models/service_Dependancy.js')
//   data: courriers,
//   message: `Les courriers`,
//   type: "success",
//   success: true,

class Service {
 static getAll(cb) {
    
  connection.query('select * from services', (err, data) => {
   if (err) return cb(err, null)
   if (data.length > 0) {
    return cb(null, data)
   } else return cb(null, (data = 'no data yet'))
  })
 }
 static getById(id, cb) {
    const request=`select SER.SERVICE_DESCR,SER.HIERARCHIE_ID,SER.SERVICE_ID,dp.PARENT_ID ,dp.PARENT,HE.HIERARCHIE from services SER, (select SE.SERVICE_DESCR AS PARENT,SE.SERVICE_ID,SD.PARENT_ID from services SE, service_dependance SD where SE.SERVICE_ID=${id} and SD.ENFANT_ID=${id})dp,(SELECT H.HIERARCHIE_DESCR AS HIERARCHIE,H.HIERARCHIE_ID  FROM services SE JOIN hierarchie H on SE.HIERARCHIE_ID=H.HIERARCHIE_ID WHERE SE.SERVICE_ID=${id})HE where SER.SERVICE_ID=dp.PARENT_ID`
  connection.query(
 request,
   (err, data) => {
    if (err) return cb(err, null)

    return cb(null, data)
   }
  )
 }

 static create(newService, cb) {
  const { SERVICE_DESCR, HIERARCHIE_ID, SERVICE_DEPEND } = newService
  connection.query(
   'insert into services set ?',
   { HIERARCHIE_ID, SERVICE_DESCR },
   (err, data) => {
    if (err) return cb(err, null)
    console.log('data out here', data)
    if (data.insertId > 0) {
     console.log('service successfully created and insertI is', data.insertId)
     const depend = {
      ENFANT_ID: data.insertId,
      PARENT_ID: SERVICE_DEPEND,
     }
     Dependancy.create(depend, (err, data) => {
      if (err) return cb(err, null)
      return cb(null, data)
     })
    } else return cb(err, null)
   }
  )
 }
 static update(newService, cb) {
  const { HIERARCHIE_ID, SERVICE_DESCR, SERVICE_ID, SERVICE_DEPEND } =
   newService
  console.log('service get byId', newService)
  connection.query(
   `update services set HIERARCHIE_ID=?, SERVICE_DESCR=? where SERVICE_ID=?`,
   [HIERARCHIE_ID, SERVICE_DESCR, SERVICE_ID],
   (err, data) => {
    if (err) return cb(err, null)

    connection.query('update service_dependance set PARENT_ID=? ENFANT_ID=? ')
    return cb(null, data)
   }
  )
 }
 static delete(id, cb) {
  connection.query(
   'delete from services where SERVICE_ID=?',
   [id],
   (err, data) => {
    if (err) return cb(err, null)
    return cb(null, data)
   }
  )
 }
}
module.exports = Service
