
const router=require('express').Router()

const {getAllCourrierPriorite}=require('../controllers/courrierPrioriteController.js')
router.route('/').get(getAllCourrierPriorite)

module.exports = router
