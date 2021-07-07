const express = require('express')
const router = express.Router()
const {
 getCourrierCategorie,
 getCourriersNonTraitCategorie,
} = require('../controllers/rapportController.js')

router
 .route('/courriers_non_traite_categorie')
 .get(getCourriersNonTraitCategorie)

apiRouter.route('/courriers_categorie/').get(getCourrierCategorie)
module.exports = router
