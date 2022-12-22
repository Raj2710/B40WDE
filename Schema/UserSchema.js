const mongoose = require('mongoose')
const validator = require('validator')
const userSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{
            type:String,
            required:true,
            validate:(value)=>validator.isEmail(value)
        },
    mobile:{
            type:String,
            required:true,
            validate:(value)=>validator.isNumeric(value) && value.length===10
        },
    password:{type:String,required:true},
    createdAt:{type:Date,default:Date.now()}
},
{
    collection:'user',
    versionKey:false
})
const userModel = mongoose.model('user',userSchema)
module.exports={userModel}