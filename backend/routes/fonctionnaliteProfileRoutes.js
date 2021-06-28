const express = require('express')
const router=express.Router()

const {getAll,profileFonctionnaliteSpecic,profileFonctionnalites}=require('../controllers/fonctionaliteProfilController.js')
router.route('/').get(getAll)
router.route('/:id').post(profileFonctionnaliteSpecic)
router.route('/profile/fonctionnalite').post(profileFonctionnalites)
module.exports = router
