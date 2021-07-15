
const router=require('express').Router()

const {getAll,create,getById,remove,update}=require('../controllers/villesController.js')
router.route('/').get(getAll).post(create)
router.route('/:id').get(getById).put(update).delete(remove)
module.exports = router
