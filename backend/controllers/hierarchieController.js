const Hierarchie=require('../models/hierarchieModel.js')
const asyncHandler = require('express-async-handler')


//   data: courriers,
//   message: `Les courriers`,
//   type: "success",
//   success: true,

const getHierarchies= asyncHandler(async (req, res, next) => {

 Hierarchie.getAll((err,data)=>{
     if(err)return next(new Error(err.message))
   return res.status(200).json({ data,message:"hierarchies",type:"success",success: true,

   })
 })
})
const getHierarchieById=asyncHandler(async (req, res, next) => {
//   console.log("this is id from req.params ",req.params.id)
    Hierarchie.getById(req.params.id,(err,data)=>{
        if(err)return next(new Error(err.message))
        console.log("data out here",data[0])
        if(data.length<0)return res.status(200).json({ data,message:"there is no hierarchie in database",type:"warning",success: false})
        return res.status(200).json({ data:data[0],message:"hierarchie",type:"success",success: true,

   }) 
    })
})
const updateHierarchie=asyncHandler(async (req, res, next) => {
    console.log("this body",req.body)
  
    Hierarchie.getById(req.params.id,(err,result)=>{
        const {data}=result
        if(err)return next(new Error(err.message))

         if(!data)return next(new Error("hierarchie unfounded..."))
         data.HIERARCHIE_CODE=req.body.HIERARCHIE_CODE?req.body.HIERARCHIE_CODE:data.HIERARCHIE_CODE
         data.HIERARCHIE_DESCR=req.body.HIERARCHIE_DESCR?req.body.HIERARCHIE_DESCR:data.HIERARCHIE_DESCR

     
        Hierarchie.update(data,(err,data)=>{
            if(err)return next(new Error(err.message))
            console.log("hierarchie UPDATED",data)
            return res.status(200).json({ data,message:"hierarchie updated",type:"success",success: true,
            
        })
    })
    
})
})

const deleteHierarchie = asyncHandler(async (req, res, next) => {
    Hierarchie.delete(req.params.id,(err,data)=>{
        if(err)return next(new Error(err.message))
        return res.status(200).json({ data,message:"hierarchie deleted",type:"success",success: true })

})})
const createHieararchie=asyncHandler(async (req, res, next) => {
    const {HIERARCHIE_CODE,HIERARCHIE_DESCR}=req.body

    const hierarchie={HIERARCHIE_CODE,HIERARCHIE_DESCR}
    Hierarchie.create(hierarchie,(err,data)=>{
        if(err) return next(new Error(err.message))
        return res.status(200).json({ data,message:"hierarchie created",type:"success",success: true }) 
    })
})

module.exports = {
    getHierarchieById,createHieararchie,deleteHierarchie,updateHierarchie,getHierarchies
}