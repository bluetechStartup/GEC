
const asyncHandler = require('express-async-handler')
const CourrierMouvement = require('../models/courrierPrioriteModel.js')


const getAllCourrierPriorite=asyncHandler(async (req, res, next) => {

    CourrierMouvement.getAll((err,data)=>{
        if(err) return next(new Error(err.message))
        return res.json(data)
    })
})

module.exports = {getAllCourrierPriorite}
