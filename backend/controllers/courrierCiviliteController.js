
const asyncHandler = require('express-async-handler')
const CourierCivilite = require('../models/courrierCiviliteModel.js')


const getAllCourrierCivilite=asyncHandler(async (req, res, next) => {

    CourierCivilite.getAll((err,data)=>{
        if(err) return next(new Error(err.message))
        return res.json(data)
    })
})

module.exports = {getAllCourrierCivilite}
