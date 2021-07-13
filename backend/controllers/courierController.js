const asyncHandler = require('express-async-handler')
const Courrier = require('../models/courierModel.js')
const fs = require('fs')
let getCouriers = asyncHandler(async (req, res, next) => {
   const orderBy = req.query.sort
  ? req.query.sort.split(',').join(' ')
  : 'DATE_ENREGISTREMENT'

 const category = req.query.category

 Courrier.getAll(orderBy,category,(err, data) => {
  if (err) return next(new Error(err.message))

  res.status(200).send(data)
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
  if (data.data.changedRows <= 0) {
   return res.json({ success: false, message: 'not updated' })
  }
  return res.json(data)
 })
})

// A REVOIR ET METTRE MULTER
// formadata({NOM_PIECE, TYPE_ANNEXE_ID, CATEGORIE_ANNEXE_ID})
// file nayo ni uyigire keyName kuri input yayo yitwe annexe
// kurungika naho ni kuri http://localhost:3005/api/courrier/courrierAnnexe/:id

let createAnnexe = asyncHandler(async (req, res, next) => {
 const { NOM_PIECE, TYPE_ANNEXE_ID, CATEGORIE_ANNEXE_ID } = req.body
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
 if (annexeFormats.includes(req.file.mimetype)) {
  fs.unlink(req.file.path, (err, data) => {
   if (err) throw err
   console.log('successfully deleted..')
  })

  console.log('this is file', req.file)

  return res.status(404).json({
   success: false,
   message: 'seule les documents peuvent etre choisi!!',
  })
 }

 PATH = `${process.env.BASE_URL}/${req.file.path}`
 const newAnnexe={ COURRIER_ID:req.params.id, NOM_PIECE, TYPE_ANNEXE_ID, CATEGORIE_ANNEXE_ID,PATH }
 console.log(newAnnexe)
 console.log(req.file)
 Courrier.createAnnexe(newAnnexe,(err,data)=>{
   if(err){
    fs.unlink(req.file.path,(err,data)=>{
      if(err)throw err
     console.log("successfully deleted..");
    })
     return next(new Error(err.message))
    }
   return res.json(data)
 })
})

let getAnnexes = asyncHandler(async (req, res, next) => {
 Courrier.getAnnexes(req.params.id, (error, courrier) => {
  if (error) return next(new Error(error.message))
  res.status(200).send(courrier)
 })
})

let getById = asyncHandler(async (req, res, next) => {
 Courrier.getById(req.params.id, (err, data) => {
  if (err) return cb(error, null)
  if (!data.data) {
   return res.json({ success: false, message: 'courrier introuvable' })
  }
  res.status(200).json(data)
 })
})
let removeAnnexe = asyncHandler(async (req, res, next) => {
 Courrier.removeAnnexe(req.params.id, (error, annexe) => {
  if (error) return next(new Error(error.message))
  if (annexe.data.affectedRows <= 0)
   return res.json({ success: false, message: 'not deleted...' })

  res.status(200).send(annexe)
 })
})

let removeCourrier = asyncHandler(async (req, res, next) => {
 Courrier.removeCourrier(req.params.id, (error, courrier) => {
  const { data } = courrier
  console.log('this is courrier', courrier)
  if (error) return next(new Error(error.message))

  if (data.affectedRows > 0) {
   Courrier.removeAnnexes(req.params.id, (error, annexes) => {
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
let getAcourriersByService=asyncHandler(async (req, res, next) => {

  Courrier.courriersByservice(req.params.id,(err,data)=>{
    if(err) return next(new Error(err.message))
    res.json(data)
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
 getAcourriersByService
}
