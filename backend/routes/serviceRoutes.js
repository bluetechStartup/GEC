const express = require('express')
const router = express.Router()

const {
 getAllServices,
 getById,
 createService,
 updateService,
 deleteService,
} = require('../controllers/serviceController.js')

router.route('/').get(getAllServices).post(createService)
router.route('/:id').get(getById).delete(deleteService).put(updateService)
module.exports = router
