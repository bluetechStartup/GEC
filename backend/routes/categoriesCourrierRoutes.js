const router=require('express').Router()

const {getAllCategoriesCourrier}=require('../controllers/categoryCourrierController.js')
router.route('/').get(getAllCategoriesCourrier)
module.exports = router


