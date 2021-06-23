const express = require('express')

const {getHierarchieById,createHieararchie,deleteHierarchie,updateHierarchie,getHierarchies}= require('../controllers/hierarchieController.js')
const router=express()



router.route('/').get(getHierarchies).post(createHieararchie)
router.route('/:id').get(getHierarchieById).put(updateHierarchie).delete(deleteHierarchie)

module.exports = router