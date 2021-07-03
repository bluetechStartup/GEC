
const asyncHandler = require('express-async-handler')
const Ville = require('../models/villeModel.js')


const getAllVilles=asyncHandler(async (req, res, next) => {

    Ville.getAll((err,data)=>{
        if(err) return next(new Error(err.message))
        return res.json(data)
    })
})

module.exports = {getAllVilles}
