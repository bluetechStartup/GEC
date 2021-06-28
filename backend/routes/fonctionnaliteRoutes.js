

const express = require('express')
const router=express.Router()
const {
    createFonctionnalite,
    getAllFonctionnalites,
    updateFonctionnalite,
    deleteFonctionnalite,
    getById,
  }=require('../controllers/fonctionnalitesController.js')

  const {getAll,profileFonctionnaliteSpecic,profileFonctionnalites}=require('../controllers/fonctionaliteProfilController.js')

  router.route('/').get(getAllFonctionnalites).post(createFonctionnalite)
  router.route('/:id').get(getById).delete(deleteFonctionnalite).put(updateFonctionnalite)
  router.route('/profilefonctionnalite').post(profileFonctionnaliteSpecic)
  router.route('/profilesfonctionnalites').get(getAll).post(profileFonctionnalites)

  module.exports=router