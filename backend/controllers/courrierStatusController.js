// CourrierStatus

const asyncHandler = require('express-async-handler')
const CourrierStatus = require('../models/courrierPrioriteModel.js')


const getAllCourrierStatus=asyncHandler(async (req, res, next) => {

    CourrierStatus.getAll((err,data)=>{
        if(err) return next(new Error(err.message))
        return res.json(data)
    })
})

module.exports = {getAllCourrierStatus}
