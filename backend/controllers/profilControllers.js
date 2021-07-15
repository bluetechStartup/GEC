const Profile = require('../models/profilModel.js')
const asyncHandler = require('express-async-handler')
let create = asyncHandler(async (req, res, next)=>{
    const {PROFIL_CODE,PROFIL_DESCR}=req.body

    if (
     PROFIL_CODE === undefined ||
     PROFIL_CODE === '' ||
     PROFIL_DESCR === undefined ||
     PROFIL_DESCR === ''
    ) {
     res.status(500).json(`Il y a un champ null ou indéfini`)
    } else {
     requete = `INSERT INTO admin_profil SET PROFIL_CODE = '${PROFIL_CODE}',PROFIL_DESCR = '${PROFIL_DESCR}'`
     Profile.insert(requete, (err, profile) => {
      if (err) {
          if(err.code==="ER_DUP_ENTRY") return next(new Error("le profile est deja dans la base "))
          return next(new Error(err.message))
        }
      res.status(200).send(profile)
     })
    }
})


let getAll=asyncHandler(async (req, res, next) => {

    Profile.getAll((err, profils) => {
     if (err) return next(new Error(err.message))
     res.status(200).send(profils)
    })
})

let getById=asyncHandler(async (req, res, next) => {
    Profile.getById(req.params.id, (err, profile) => {
     if (err) return next(new Error(err.message))
     res.status(200).send(profile)
    })
})
let update=asyncHandler(async (req, res, next) => {
    // const {PROFIL_CODE,PROFIL_DESCR}=req.bod
    Profile.getById(req.params.id, (err, profile)=>{
        if(err) return next(new Error(err.message))
        const {data}=profile
        if(data.PROFIL_ID<=0)return next(new Error("no profile found.."))
        Profile.update(req.body,req.params.id,(err,result)=>{
            if(err) return next(new Error(err.message))
            res.json(result)
        })
        

    })
})
let deleteProfile=asyncHandler(async (req, res, next) => {

    Profile.delete(req.params.id, (err, profile) => {
     if (err) return next(new Error(err.message))
     res.status(200).send(profile)
    })

})
module.exports = {
 create,
 getAll,
 update,
 deleteProfile,
 getById,

}
