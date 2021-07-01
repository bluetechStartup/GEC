
const asyncHandler = require('express-async-handler')
const AnnexeType = require('../models/annexeTypeModel.js')


const getAllannexeType=asyncHandler(async (req, res, next) => {

    AnnexeType.getAll((err,data)=>{
        if(err) return next(new Error(err.message))
        return res.json(data)
    })
})

module.exports = {getAllannexeType}
