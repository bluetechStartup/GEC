// getAllCourrierMouvement
const router=require('express').Router()

const {getAllCourrierMouvement}=require('../controllers/courrierMouvementController.js')
router.route('/').get(getAllCourrierMouvement)

module.exports = router
