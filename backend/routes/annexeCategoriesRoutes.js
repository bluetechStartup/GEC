const router=require('express').Router()

const {getAllCategoriesAnnexe}=require('../controllers/categoryAnnexeController.js')
router.route('/').get(getAllCategoriesAnnexe)
module.exports = router

