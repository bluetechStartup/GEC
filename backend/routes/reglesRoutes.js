
const express = require('express')
const router = express.Router()
const { create, getById,update,getAll, remove }=require('../controllers/regleController.js')

router.route("/:id").put(update).get(getById).delete(remove);
router.route('/').get(getAll).post(create)
module.exports = router