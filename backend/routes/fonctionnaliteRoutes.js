

const express = require('express')
const router=express.Router()
const {
    createFonctionnalite,
    getAllFonctionnalites,
    updateFonctionnalite,
    deleteFonctionnalite,
    getById,
  }=require('../controllers/fonctionnalitesController.js')


  router.route('/').get(getAllFonctionnalites).post(createFonctionnalite)
  router.route('/:id').get(getById).delete(deleteFonctionnalite).put(updateFonctionnalite)

  module.exports=router