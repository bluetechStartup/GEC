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
  res.status(500).json({success: false,message:"un ou plusieur champ sont vide..."})
 } else {
  const newRegle = {NOMBRE_HEURE:parseInt(CATEGORIE_COURRIER_ID)  ,CATEGORIE_COURRIER_ID:parseInt(NOMBRE_HEURE) ,PERSONE_ID: parseInt(PERSONE_ID) }
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
 Regle.getOne(req.params.id, (err, data) => {
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
