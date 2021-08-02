const Rapport = require('../models/rapportModel.js')
const asyncHandler = require('express-async-handler')

const getCourriersNonTraitCategorie = asyncHandler(async (req, res, next) => {
 Rapport.courriers_non_traite_categorie((err, data) => {
  if (err) return next(new Error(err.message))
  res.json(data)
 })
})

const getCourriersEnCours = asyncHandler(async (req, res, next) => {
 Rapport.courriers_en_cours((err, data) => {
  if (err) return next(new Error(err.message))
  res.json(data)
 })
})
const getCourriersSuspendu = asyncHandler(async (req, res, next) => {
 Rapport.courriers_suspendu((err, data) => {
  if (err) return next(new Error(err.message))
  res.json(data)
 })
})

const getCourrierCategorie = asyncHandler(async (req, res, next) => {
 Rapport.courriers_categorie((err, data) => {
  if (err) return next(new Error(err.message))
  res.json(data)
 })
})

module.exports = {
 getCourriersNonTraitCategorie,
 getCourrierCategorie,
 getCourriersEnCours,
 getCourriersSuspendu,
}
