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
} = require('../controllers/courierController.js')
router.route('/').get(getCouriers).post(createCourier)
router.route('/:id').get(getById).put(update).delete(removeCourrier)
router
 .route('/courrierAnnexe/:id')
//  api/courrier/courrierAnnexe/:id
.get(getAnnexes)
 .post(createAnnexe)
 .delete(removeAnnexe)

module.exports = router
