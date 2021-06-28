const express = require('express')
const router=express.Router()

const {getAll,profileFonctionnaliteSpecic,profileFonctionnalites,updateProfileFonctionnalite}=require('../controllers/fonctionaliteProfilController.js')
router.route('/').get(getAll).post(updateProfileFonctionnalite)
router.route('/:id').post(profileFonctionnaliteSpecic)
router.route('/profile/:id').get(profileFonctionnalites)
module.exports = router
