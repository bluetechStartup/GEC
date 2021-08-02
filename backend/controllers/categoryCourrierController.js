
const asyncHandler = require('express-async-handler')
const CategoryCourrier = require('../models/courrierCategoriesModel.js')


const getAll=asyncHandler(async (req, res, next) => {

    CategoryCourrier.getAll((err,data)=>{
        if(err) return next(new Error(err.message))
        return res.json(data)
    })
})
const create=asyncHandler(async (req, res, next) => {
    const {NOMBRE_JOUR,COURRIER_DESCR}= req.body
  if(NOMBRE_JOUR=='' || NOMBRE_JOUR==undefined || COURRIER_DESCR=='' || COURRIER_DESCR==undefined)
  return next(new Error("un ou plusieurs champ sont vide.."))
  CategoryCourrier.insert({NOMBRE_JOUR,COURRIER_DESCR}, (err, data)=>{
      if(err) return next(new Error(err.message))
      return res.json(data)
  })
})
const getById = asyncHandler(async (req, res, next) => {
    CategoryCourrier.getOne(req.params.id,(err,data)=>{
        if(err) return next(new Error(err.message))
        return res.json(data)
    })
})
const update = asyncHandler(async (req, res, next) => {
    const {NOMBRE_JOUR,CATEGORIE_COURRIER_DESCR}= req.body
    CategoryCourrier.update({NOMBRE_JOUR,CATEGORIE_COURRIER_DESCR}, (err, data)=>{
        if(err) return next(new Error(err.message))
        if(data.data.affectedRows <= 0)return res.json({success:false,message:"failed to update.."})
       return res.json(data)
    })
})
const remove = asyncHandler(async (req, res, next) => {
    CategoryCourrier.remove(req.params.id, (err, data)=>{
        if(err) return next(new Error(err.message))
        if(data.data.affectedRows<=0)return res.json({success:false,message:"error not removed..."})
        return res.json(data)
    })
})

module.exports = {getAll,create,getById,remove,update}
