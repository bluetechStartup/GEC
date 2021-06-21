const express = require('express')
const profile = require('../controllers/profilControllers.js')

//Router
var router = express.Router()

//Les routes pour le controlleur ProfilesCtl
router.route('/').get(profile.all).post(profile.add)
router.route('/:id').get(profile.one).put(profile.edit).delete(profile.remove)
router.route('/profileGetFonctionnalites/:id').get(profile.fonctionnalites)

module.exports = router
