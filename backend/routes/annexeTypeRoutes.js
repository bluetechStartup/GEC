const router=require('express').Router()

const {getAllannexeType}=require('../controllers/annexeTypeController.js')
router.route('/').get(getAllannexeType)
module.exports = router

