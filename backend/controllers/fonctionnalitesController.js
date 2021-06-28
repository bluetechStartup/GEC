
const asyncHandler = require('express-async-handler')
const Fonctionnalite = require("../models/fonctionalitesModel");




let createFonctionnalite=asyncHandler(async (req, res, next) => {
     const {FONCTIONNALITE_URL, FONCTIONNALITE_DESCR}  =req.body
     if (FONCTIONNALITE_URL == undefined || FONCTIONNALITE_URL == "" || FONCTIONNALITE_DESCR == undefined ||FONCTIONNALITE_DESCR == ""){
        res.status(500).json({
            message: `Il y a un champ null ou indéfini`,
           
            success: false,
          });
      }

          
          Fonctionnalite.create({FONCTIONNALITE_URL, FONCTIONNALITE_DESCR},(err,data)=>{
              
              if(err){
                  if(err.code==="ER_DUP_ENTRY") return next(new Error("la fonctionnalites est dja dans la base")) 
                  return next(new Error(err.message))
              }
              res.json(data)
          })
     



})

let getAllFonctionnalites=asyncHandler(async (req, res, next) => {
    Fonctionnalite.getAll((err, fonctionnalites) => {
        if(err)return next(new Error(err.message))
        res.status(200).json({
          data: fonctionnalites,
          success: true,
        })
      })

})


let getById=asyncHandler(async (req, res, next) => {
    Fonctionnalite.getOne(req.params.id, (err, fonctionnalite) => {
        if(err)return next(new Error(err.message))
         
        res.status(200).json(fonctionnalite);
      });

})

let updateFonctionnalite=asyncHandler(async (req, res, next) => {

    Fonctionnalite.getOne(req.params.id,(err,doc)=>{
      if(err) return next(new Error(err.message))
      const {data}=doc
        if(!data)return next(new Error("fonctionnalite introuvable..."))
        
        console.log("fonctionnalite before mise a jour",data.FONCTIONNALITE_DESCR)
        data.FONCTIONNALITE_URL=req.body.FONCTIONNALITE_URL?req.body.FONCTIONNALITE_URL:data.FONCTIONNALITE_URL
        data.FONCTIONNALITE_DESCR=req.body.FONCTIONNALITE_DESCR?req.body.FONCTIONNALITE_DESCR:data.FONCTIONNALITE_DESCR
       console.log("fonctionnalite mise a jour",data)
        Fonctionnalite.update(data,(err,fonctionnalite)=>{
            if(err) return next(new Error(err.message))
            res.json(fonctionnalite)
        })
    })

})

let deleteFonctionnalite=asyncHandler(async (req, res, next) => {



  

    Fonctionnalite.remove(req.params.id, (err, fonctionnalite) => {
        if(err) return next(new Error(err.message))
     const {data}=fonctionnalite
     if(data.affectedRows<=0)return next(new Error("fonctionnalite introuvable"))
      res.status(200).json(fonctionnalite);
    });
})



module.exports = {
  createFonctionnalite,
  getAllFonctionnalites,
  updateFonctionnalite,
  deleteFonctionnalite,
  getById,
};
