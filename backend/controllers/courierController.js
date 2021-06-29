const multer = require('multer')
const asyncHandler = require('express-async-handler')
const Courrier = require('../models/courierModel.js')

let getCouriers = asyncHandler(async (req, res, next) => {
 Courrier.getAll((err, courriers) => {
  response.status(200).send({
   data: courriers,
   message: `Les courriers`,
   type: 'success',
   success: true,
  })
 })
})

const createCourier = asyncHandler(async (req, res, next) => {
 const {
  MOUVEMENT_ID,
  REFERENCE,
  DATE_RECEPTION,
  DATE_ENREGISTREMENT,
  OBJET,
  CATEGORIE_COURRIER_ID,
  PRIORITE_ID,
  CIVILITE_ID,
  EXPEDITEUR_IDENTITE,
  EXPEDITEUR_ADDRESSE,
  EXPEDITEUR_VILLE_ID,
  SERVICE_ID,
  REFERENT_USER_ID,
  ACTION_ID,
  USER_ID,
 } = req.body

 var newCourrier = {
  MOUVEMENT_ID: MOUVEMENT_ID,
  REFERENCE: REFERENCE,
  DATE_RECEPTION: DATE_RECEPTION,
  DATE_COURRIER: new Date(),
  DATE_ENREGISTREMENT: DATE_ENREGISTREMENT,
  OBJET: OBJET,
  CATEGORIE_COURRIER_ID: CATEGORIE_COURRIER_ID,
  PRIORITE_ID: PRIORITE_ID,
  CIVILITE_ID: CIVILITE_ID,
  EXPEDITEUR_IDENTITE: EXPEDITEUR_IDENTITE,
  EXPEDITEUR_ADDRESSE: EXPEDITEUR_ADDRESSE,
  EXPEDITEUR_VILLE_ID: EXPEDITEUR_VILLE_ID,
  SERVICE_ID: SERVICE_ID,
  REFERENT_USER_ID: REFERENT_USER_ID,
  ACTION_ID: ACTION_ID,
  USER_ID: USER_ID,
  STATUT_ID: 1,
 }

 Courrier.create(newCourrier, (err, data) => {
  if (err) return next(new Error(err.message))
  return res.json(data)
 })
})

let update = asyncHandler(async (req, res, next) => {
 const {
  MOUVEMENT_ID,
  REFERENCE,
  DATE_RECEPTION,
  DATE_ENREGISTREMENT,
  OBJET,
  CATEGORIE_COURRIER_ID,
  PRIORITE_ID,
  CIVILITE_ID,
  EXPEDITEUR_IDENTITE,
  EXPEDITEUR_ADDRESSE,
  EXPEDITEUR_VILLE_ID,
  SERVICE_ID,
  REFERENT_USER_ID,
  ACTION_ID,
  USER_ID,
 } = req.body
 var newCourrier = {
  MOUVEMENT_ID: MOUVEMENT_ID,
  REFERENCE: REFERENCE,
  DATE_RECEPTION: DATE_RECEPTION,
  DATE_COURRIER: new Date(),
  DATE_ENREGISTREMENT: DATE_ENREGISTREMENT,
  OBJET: OBJET,
  CATEGORIE_COURRIER_ID: CATEGORIE_COURRIER_ID,
  PRIORITE_ID: PRIORITE_ID,
  CIVILITE_ID: CIVILITE_ID,
  EXPEDITEUR_IDENTITE: EXPEDITEUR_IDENTITE,
  EXPEDITEUR_ADDRESSE: EXPEDITEUR_ADDRESSE,
  EXPEDITEUR_VILLE_ID: EXPEDITEUR_VILLE_ID,
  SERVICE_ID: SERVICE_ID,
  REFERENT_USER_ID: REFERENT_USER_ID,
  ACTION_ID: ACTION_ID,
  USER_ID: USER_ID,
  STATUT_ID: 1,
 }
 Courrier.update(newCourrier, req.params.id, (err, data) => {
  if (err) return next(new Error(err.message))
  return res.json(data)
 })
})

// A REVOIR ET METTRE MULTER
let createAnnexe = (req, res) => {
 const { COURRIER_ID, NOM_PIECE, TYPE_ANNEXE_ID, CATEGORIE_ANNEXE_ID } =
  req.body

 console.log('file out here', req.file)

 const annexeFormats = [
  'audio/midi',
  'audio / mpeg',
  'audio / webm',
  'audio / ogg',
  'audio / wav',
  'video/webm',
  'video/x-msvideo',
  'video/ogg',
 ]
 if (annexeFormats.includes(req.file.mimetype.trim())) {
  return res
   .status(404)
   .json({ success: false, message: 'seule le document peuvent etre choisi!!' })
 }
 PATH = `${process.env.BASE_URL}/${req.file.path}`
 console.log('the path:', PATH)
}

let getAnnexes = (req, res) => {
 let id = req.params.id
 Courrier.getAnnexes(id, (error, courrier) => {
  if (error) return next(new Error(error.message))
  res.status(200).send(courrier)
 })
}
let getById = asyncHandler(async (req, res, next) => {
 Courrier.getById(req.params.id, (err, data) => {
  if (err) return cb(error, null)

  res.status(200).json(data)
 })
})

let removeAnnexe = (req, res) => {
 let id = req.params.id
 Courrier.removeAnnexe(id, (error, annexe) => {
  res.status(200).send({
   data: annexe,
   message: `L'annexe du courrier a été supprimé.`,
   type: 'success',
   success: true,
  })
 })
}
let removeCourrier = asyncHandler(async (req, res, next) => {
 Courrier.removeCourrier(req.params.id, (error, courrier) => {
  const { data } = courrier
  if (error) return next(new Error(error.message))

  if (data.affectedRows > 0) {
   Courrier.removeAnnexes(id, (error, annexes) => {
    if (error) return next(new Error(error.message))
   })
   return res.json(courrier)
  } else {
   res
    .status(200)
    .json({ success: false, message: "le courrier n'est pas suprimer" })
  }
 })
})

module.exports = {
 getById,
 createAnnexe,
 getAnnexes,
 removeCourrier,
 removeAnnexe,
 getCouriers,
 createCourier,
 update,
}
