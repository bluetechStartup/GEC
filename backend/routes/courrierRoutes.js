const express = require('express')
const router = express.Router()

const {
 update,
 createCourier,
 getCouriers,
 getById,
 createAnnexe,
 getAnnexes,
 removeCourrier,
 removeAnnexe,
 getAcourriersByService
} = require('../controllers/courierController.js')
router.route('/').get(getCouriers).post(createCourier)
router.route('/:id').get(getById).put(update).delete(removeCourrier)
router
.route('/courrierAnnexe/:id')
.get(getAnnexes)
.post(createAnnexe)
.delete(removeAnnexe)
router.route('/courrierbyservice/:id').get(getAcourriersByService).post(getAcourriersByService)

module.exports = router
