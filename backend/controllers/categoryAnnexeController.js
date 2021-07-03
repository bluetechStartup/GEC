
const asyncHandler = require('express-async-handler')
const AnnexeCategorie = require('../models/annexeCategories.js')


const getAllCategoriesAnnexe=asyncHandler(async (req, res, next) => {

    AnnexeCategorie.getAll((err,data)=>{
        if(err) return next(new Error(err.message))
        return res.json(data)
    })
})

module.exports = {getAllCategoriesAnnexe}
