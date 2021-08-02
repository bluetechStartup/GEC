const router=require('express').Router()

const {getAll,create,getById,remove,update}=require('../controllers/categoryCourrierController.js')
router.route('/').get(getAll).post(create)
router.route('/:id').get(getById).put(update).delete(remove)
module.exports = router


