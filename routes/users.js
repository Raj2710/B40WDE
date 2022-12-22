var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
const {dbUrl} = require('../dbConfig')
const {userModel} = require('../Schema/UserSchema')
const {hashPassword,hashCompare,createToken,decodeToken} = require('../common/auth')
mongoose.connect(dbUrl)
router.get('/all',async(req,res)=>{
  try {
    let users = await userModel.find()
    res.status(201).send({data:users})
  } catch (error) {
    console.log(error)
    res.status(500).send({message:"Internal Server Error",error})
  }
})

router.post('/signup',async(req,res)=>{
  try {
    let user = await userModel.findOne({email:req.body.email})
    if(!user)
    {
        req.body.password = await hashPassword(req.body.password) 
        let user = await userModel.create(req.body)
        res.status(201).send({message:"Registration Succesfull!"})
    }
    else
    {
      res.status(400).send({message:`User with ${req.body.email} already exists`})  
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({message:"Internal Server Error",error})
  }
})

router.post('/login',async(req,res)=>{
  try {
    let user = await userModel.findOne({email:req.body.email})
    if(user)
    {
        if(await hashCompare(req.body.password, user.password))
        {
          let token = await createToken(
            {
              firstName:user.firstName,
              lastName:user.lastName,
              email:user.email,
              mobile:user.mobile
            })
            decodeToken(token)
          res.status(200).send({message:"Login Succesfull!",token})
        }
        else
        {
          res.status(400).send({message:`Invalid Credential`})
        }
    }
    else
    {
      res.status(400).send({message:`User with ${req.body.email} does not exists`})  
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({message:"Internal Server Error",error})
  }
})

module.exports = router;
