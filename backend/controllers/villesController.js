
const asyncHandler = require('express-async-handler')
const Ville = require('../models/villeModel.js')


const getAll=asyncHandler(async (req, res, next) => {

    Ville.getAll((err,data)=>{
        if(err) return next(new Error(err.message))
        return res.json(data)
    })
})

const create = asyncHandler(async (req, res, next) => {
    Ville.create(req.body,(err,data)=>{
        if(err) return next(new Error(err.message))
        res.json(data)
    })
})
const getById = asyncHandler(async (req, res, next) => {
    Ville.getById(req.params.id, (err,data)=>{
        if(err) return next(new Error(err.message))
        res.json(data)
    })
})
const update = asyncHandler(async (req, res, next) => {
    Ville.update(req.body,req.params.id,(err,data)=>{
        if(err) return next(new Error(err.message))
        res.json(data)
    })
})
const remove = asyncHandler(async (req, res, next) => {
    Ville.remove(req.params.id,(err,data)=>{
        if(err) return next(new Error(err.message))
        res.json(data)
    })
})
module.exports = {getAll,create,getById,remove,update}
