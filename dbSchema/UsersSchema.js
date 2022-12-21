const mongoose = require('mongoose')
const validator = require('validator')

const usersSchema = new mongoose.Schema(
    {
        firstName:{type:String,required:true},
        lastName:{type:String, required:true},
        email:{
                type:String,
                required:true,
                lowercase:true,
                validate:(value)=>validator.isEmail(value)
            },
        mobile:{type:String, default:"000-000-0000"},
        batch:{type:String},
        mentor:{type:String},
        createdAt:{type:Date,default:Date.now()}
    },
    {
        collection:'user',
        versionKey:false
    }
)

const userModel = mongoose.model('user',usersSchema)

module.exports =  {userModel}