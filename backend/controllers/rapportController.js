const Rapport = require('../models/rapportModel.js')

let courriers_non_traite_categorie = (request, response) => {
 Rapport.courriers_non_traite_categorie((error, courriers) => {
  response.status(200).send({
   data: courriers,
   type: 'sucess',
   success: true,
  })
 })
}

let courriers_categorie = (request, response) => {
 Rapport.courriers_categorie((error, courriers) => {
  response.status(200).send({
   data: courriers,
   type: 'sucess',
   success: true,
   message: `donnees`,
  })
 })
}

module.exports = {
 courriers_non_traite_categorie,
 courriers_categorie,
}
