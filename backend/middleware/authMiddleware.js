
const asyncHandler=require('express-async-handler')
const User=require('../models/userModel.js')
const sql =require('../config/db.js')
const jwt=require('jsonwebtoken')


// protect route
exports.protect=asyncHandler(async (req,res,next)=>{
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

        token=req.headers.authorization.split(' ')[1]
        console.log(req.headers.authorization.split('Bearer '))
    }
   
    if(!token){
        return res.status(403).json({success:false,message:" login first..."})
    }
    
    const decod=jwt.verify(token,process.env.JWT_SECRET)
    console.log(decod)

    const retrieveQuery = `SELECT USER_ID,FIRST_NAME,LAST_NAME ,IS_ACTIVE,TELEPHONE,admin_profil.PROFIL_DESCR from admin_users , admin_profil WHERE admin_users.USER_ID=${decod.id} AND admin_users.PROFIL_ID=admin_profil.PROFIL_ID`
    sql.query(retrieveQuery, (err, user)=>{
        if(err) throw err
        if(user.length !== 0){
            if(!user) {
                return res.json({success:false,message:"user not found"})
            }
            req.user=user[0]


          next()
            
        }

        

    })

    
})
exports.admin=asyncHandler(async (req, res, next) => {

    if(req.user && req.user.PROFIL_DESCR !== "ADMIN"){
        res.status(403).json({success:false,message:"only admin can execute this task..."})
    }
    next()
})
