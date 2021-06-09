
const asyncHandler=require("express-async-handler")
const User =require("../models/userModel.js")

// @desc register user
// @route  api/register
// @security public
const register =asyncHandler(async(req,res,next)=>{

    const {username,password}=req.body
    const user= new User({username,password})
    
    user.save().then(user => {
        
        return res.json({success:true,data:{...user._doc,token:user.signWithToken()}})}
        
        ).catch(err => console.log(err.message))
    
    
})
// @desc login user
// @route  api/auth
// @security public
const getMe=asyncHandler(async(req,res,next)=>{

    if(!req.user ){
        return res.json({success:false,message:"login first"})
    }
    return res.json({success:true,data:req.user})
})
const login =asyncHandler(async(req,res,next)=>{
    console.log(req.body)
    const {username,password}=req.body
     const user=await User.findOne({username})
     
     if(!user){
          return res.status(404).json({success:false,message:"user not found..."})
}     
 const isMatch=await user.comparePassword(password.trim())
 

     if(!isMatch){return res.status(404).json({success:false,message:"wrong password..."})
}
    return res.json({success:true,data:{...user._doc,token:user.signWithToken()}}) 
})



module.exports={
    register,
    login
}



