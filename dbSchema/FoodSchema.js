const mongoose = require('mongoose')
const validator = require('validator')


const foodSchema = new mongoose.Schema({
    name:{type:String},
    price:{type:Number},
    createdAt:{type:Date,default:Date.now()}
},
{
    collection:'food',
    versionKey:false
}
)

const foodModel = mongoose.model('food',foodSchema)
module.exports = {foodModel}