// getAllCourrierStatus


const router=require('express').Router()

const {getAllCourrierStatus}=require('../controllers/courrierStatusController.js')
router.route('/').get(getAllCourrierStatus)

module.exports = router

