var express = require('express');
const mongoose = require('mongoose')
var router = express.Router();
const {mongodb,dbUrl} = require('./../config/dbConfig')
const {userModel} = require('./../dbSchema/UsersSchema')
const {foodModel} = require('./../dbSchema/FoodSchema')

mongoose.connect(dbUrl)

//Using Mongoose connection

router.get('/', async(req, res)=> {
  try {
    let users = await userModel.find({},{__v:0})
    res.status(200).send({data:users})
  } catch (error) {
    res.status(500).send({message:"Internal Server Error",error})
  }
});

router.get('/:id', async(req, res)=> {
  try {
    let users = await userModel.findById({_id:req.params.id},{_id:0,__v:0})
    res.status(200).send({data:users})
  } catch (error) {
    res.status(500).send({message:"Internal Server Error",error})
  }
});

router.post('/',async(req,res)=>{
    try {
      let user = await userModel.findOne({email:req.body.email})
      if(!user)
      {
        await userModel.create(req.body)
        res.status(201).send({message:"User Creation Successfull"}
        )
      }
      else
        res.status(400).send({message:`User with email ${req.body.email} aready exists`})
    } catch (error) {
      res.status(500).send({message:"Internal Server Error",error})
    }
})
router.put('/:id',async(req,res)=>{
  try {
    let user = await userModel.findById({_id:req.params.id})
    if(user)
    {
      await userModel.updateOne({_id:req.params.id},req.body,{runValidators:true})
      res.status(201).send({message:"User Edited Successfull"}
      )
    }
    else
      res.status(400).send({message:`User with email ${req.body.email} aready exists`})
  } catch (error) {
    res.status(500).send({message:"Internal Server Error",error})
  }
})

router.delete('/:id',async(req,res)=>{
  try {
    let user = await userModel.findById({_id:req.params.id})
    if(user)
    {
      await userModel.deleteOne({_id:req.params.id})
      res.status(201).send({message:"User Delete Successfull"}
      )
    }
    else
      res.status(400).send({message:`User with email ${req.body.email} aready exists`})
  } catch (error) {
    res.status(500).send({message:"Internal Server Error",error})
  }
})

module.exports = router;
