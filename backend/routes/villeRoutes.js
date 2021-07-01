
const router=require('express').Router()

const {getAllVilles}=require('../controllers/villesController.js')
router.route('/').get(getAllVilles)

module.exports = router
