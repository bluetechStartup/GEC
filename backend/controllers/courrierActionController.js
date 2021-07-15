
const asyncHandler = require('express-async-handler')
const CourrierAction = require('../models/courrierActionModel.js')


const getAllCourrierAction=asyncHandler(async (req, res, next) => {

    CourrierAction.getAll((err,data)=>{
        if(err) return next(new Error(err.message))
        return res.json(data)
    })
    
})

module.exports = {getAllCourrierAction}
