const router=require('express').Router()

const {getAllCourrierCivilite}=require('../controllers/courrierCiviliteController.js')
router.route('/').get(getAllCourrierCivilite)

module.exports = router
