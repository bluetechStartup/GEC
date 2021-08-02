const express = require('express')
const router = express.Router()

const {
 getCourriersEnCours,
 getCourriersSuspendu,
 getCourriersNonTraitCategorie,
} = require('../controllers/rapportController.js')

router
 .route('/courriers_non_traite_categorie')
 .get(getCourriersNonTraitCategorie)
router.route('/courriers_en_cours').get(getCourriersEnCours)
router.route('/courriers_suspendu').get(getCourriersSuspendu)

module.exports = router
