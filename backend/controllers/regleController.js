const asyncHandler = require('express-async-handler')

const Regle = require('../models/regleModel.js')

const create = asyncHandler(async (req, res, next) => {
 const { NOMBRE_HEURE, CATEGORIE_COURRIER_ID, PERSONE_ID } = req.body
 if (
  PERSONE_ID == undefined ||
  PERSONE_ID == '' ||
  NOMBRE_HEURE == undefined ||
  NOMBRE_HEURE == '' ||
  CATEGORIE_COURRIER_ID == undefined ||
  CATEGORIE_COURRIER_ID == ''
 ) {
  response.status(500).json({
   success: fasle,
   message: `Il y a un champ null ou indéfini`,
  })
 } else {
  const newRegle = { CATEGORIE_COURRIER_ID, NOMBRE_HEURE, PERSONE_ID }
  Regle.insert(newRegle, (err, data) => {
   if (err) return next(new Error(err.message))
   return res.json(data)
  })
 }
})

const getAll = asyncHandler(async (req, res, next) => {
 Regle.getAll((err, data) => {
  if (err) return next(new Error(err.message))
  res.json(data)
 })
})

const getById = asyncHandler(async (req, res, next) => {
 Regle.getOne(request.params.id, (err, data) => {
  if (err) return next(new Error(err.message))
  return res.json(data)
 })
})
const update = asyncHandler(async (req, res, next) => {
 const { CATEGORIE_COURRIER_ID, NOMBRE_HEURE, PERSONE_ID } = req.body
 const newRegle = { CATEGORIE_COURRIER_ID, NOMBRE_HEURE, PERSONE_ID }
 Regle.update(newRegle, req.params.id, (error, data) => {
  if (error) return next(new Error(error.message))
  res.json(data)
 })
})
const remove = asyncHandler(async (req, res, next) => {
 Regle.remove(req.params.id, (err, data) => {
  if (err) return next(new Error(err.message))
  return res.json(data)
 })
})

module.exports = { create, getById,update,getAll, remove }
