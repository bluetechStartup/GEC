const express = require('express')

const {create,
    getAll,
    update,
    deleteProfile,
    getById} = require('../controllers/profilControllers.js')

//Router
var router = express.Router()

//Les routes pour le controlleur ProfilesCtl
router.route('/').get(getAll).post(create)
router.route('/:id').get(getById).put(update).delete(deleteProfile)
// router.route('/profileFonctionnalites/:id').get(fonctionnalites)

module.exports = router
