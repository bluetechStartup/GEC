
const asyncHandler = require('express-async-handler')
const CourrierProrite = require('../models/courrierPrioriteModel.js')


const getAll=asyncHandler(async (req, res, next) => {

    CourrierProrite.getAll((err,data)=>{
        if(err) return next(new Error(err.message))
        return res.json(data)
    })
})
const create = asyncHandler(async (req, res, next) => {
    CourrierProrite.create(req.body,(err,data)=>{
        if(err) return next(new Error(err.message))
        res.json(data)
    })
})
const getById = asyncHandler(async (req, res, next) => {
    CourrierProrite.getById(req.params.id, (err,data)=>{
        if(err) return next(new Error(err.message))
        res.json(data)
    })
})
const update = asyncHandler(async (req, res, next) => {
    CourrierProrite.update(req.body,req.params.id,(err,data)=>{
        if(err) return next(new Error(err.message))
        res.json(data)
    })
})
const remove = asyncHandler(async (req, res, next) => {
    CourrierProrite.remove(req.params.id,(err,data)=>{
        if(err) return next(new Error(err.message))
        res.json(data)
    })
})
module.exports = {getAll,create,getById,remove,update}

