
const asyncHandler=require('express-async-handler')
const User=require('../models/User.js')

const jwt=require('jsonwebtoken')


// protect route
exports.protect=ansyncHandler(async (req,res,next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

        token=req.headers.authorization.split(' ')[1]
    }
   
    if(!token){
        return res.status(403).json({success:false,message:"unauthenticated..."})
    }
    
    const decod=jwt.verify(token,process.env.JWT_SECRET)
    console.log(decod)
    const user=await User.findById(decod.id)
    if(!user) {
        return res.json({success:false,message:"user not found"})
    }
    req.user=user
  next()
    
})
