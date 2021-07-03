const router=require('express').Router()

const {getAllCourrierAction}=require('../controllers/courrierActionController.js')
router.route('/').get(getAllCourrierAction)

module.exports = router
