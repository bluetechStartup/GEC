const mongoose=require("mongoose")
const bcrypt= require("bcryptjs")
const jwt=require('jsonwebtoken')
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    password:String,
    post:{
        type:String,
        default:"secretaire",
        enum:["secretaire","D.T","D.C","D.G","D.A.F"]
    },
    inbox:[String]
})

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
      next()
    }
    const salt=await bcrypt.genSalt()
    this.password=await bcrypt.hash(this.password,salt)
})
userSchema.methods.comparePassword=async function(plaintYpass){
    return await bcrypt.compare(plaintYpass,this.password)
}
userSchema.methods.signWithToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    })
}

module.exports = mongoose.model('User',userSchema)


