const Profile = require('../models/profilModel.js')

let add = (request, response) => {
 PROFIL_CODE = request.body.PROFIL_CODE
 PROFIL_DESCR = request.body.PROFIL_DESCR

 if (
  PROFIL_CODE == undefined ||
  PROFIL_CODE == '' ||
  PROFIL_DESCR == undefined ||
  PROFIL_DESCR == ''
 ) {
  response.status(500).json(`Il y a un champ null ou indéfini`)
 } else {
  requete = `INSERT INTO admin_profil SET PROFIL_CODE = '${PROFIL_CODE}',PROFIL_DESCR = '${PROFIL_DESCR}'`
  Profile.insert(requete, (err, profile) => {
   if (err) return next(new Error(err.message))
   response.status(200).send(profile)
  })
 }
}

let all = (request, response) => {
 Profile.getAll((err, profils) => {
  if (err) return next(new Error(err.message))
  response.status(200).send(profils)
 })
}

let one = (request, response) => {
 let id = request.params.id
 Profile.getOne(id, (err, profile) => {
  if (err) return next(new Error(err.message))
  response.status(200).send(profile)
 })
}

let edit = (request, response) => {
 let id = request.params.id
 PROFIL_CODE = request.body.PROFIL_CODE
 PROFIL_DESCR = request.body.PROFIL_DESCR

 requete = `UPDATE admin_profil SET PROFIL_CODE = '${PROFIL_CODE}',PROFIL_DESCR = '${PROFIL_DESCR}' WHERE PROFIL_ID = ${id}`
 Profile.update(requete, (err, profile) => {
  if (err) return next(new Error(err.message))
  response.status(200).send(profile.message)
 })
}

let remove = (request, response) => {
 let id = request.params.id
 Profile.remove(id, (err, profile) => {
  if (err) return next(new Error(err.message))
  response.status(200).send(profile)
 })
}

let fonctionnalites = (request, response) => {
 let id = request.params.id
 Profile.getFonctionnalites(id, (err, fonctionnalites) => {
  if (err) return next(new Error(err.message))
  response.status(200).send(fonctionnalites)
 })
}

module.exports = {
 add,
 all,
 edit,
 remove,
 one,
 fonctionnalites,
}
