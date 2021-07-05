
const asyncHandler = require('express-async-handler')
const CategoryCourrier = require('../models/courrierCategoriesModel.js')


const getAllCategoriesCourrier=asyncHandler(async (req, res, next) => {

    CategoryCourrier.getAll((err,data)=>{
        if(err) return next(new Error(err.message))
        return res.json(data)
    })
})

module.exports = {getAllCategoriesCourrier}
