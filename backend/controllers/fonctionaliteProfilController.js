const AdminFonc_Prof =require('../models/fonctionaliteProfilModel.js')
const asyncHandler = require('express-async-handler')






const getAll = asyncHandler(async (req, res, next)=>{
    AdminFonc_Prof.getAll((err,data)=>{
        if(err) return next(new Error(err.message))
        res.json(data)
    })

})

const profileFonctionnalites=asyncHandler(async (req, res, next) => {
    AdminFonc_Prof.getAllFonctionnalitesForSingleProfil(req.body.prof_code,(err,data)=>{
        if (err) return next(new Error("ressource introuvable"))
        res.json(data)
    })
})
const profileFonctionnaliteSpecic= asyncHandler(async (req, res, next) => {
    const {FONCTIONNALITE_ID}=req.body
    AdminFonc_Prof.getFonctionnaliteWithSpecificProfil(req.params.id,FONCTIONNALITE_ID,(err,data)=>{
       
        if(err) return next(new Error(err.message))
        return res.json(data)
    })
})

module.exports = {getAll,profileFonctionnaliteSpecic,profileFonctionnalites}