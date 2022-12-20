const express = require('express')
const router = express.Router()

let students = [
    {
        name:"Vishal",
        email:"vishal@gmail.com",
        mobile:"9876543212",
        batch:"B40WD",
        mentor:"Nagarajan"
    },
    {
        name:"Neeraj",
        email:"neeraj@gmail.com",
        mobile:"9657838281",
        batch:"B40WD",
        mentor:"Nagarajan"
    }
]

router.get('/',(req,res)=>{
    res.status(200).send(students)
})

router.get('/:id',(req,res)=>{
    if(req.params.id < students.length)
        res.status(200).send(students[req.params.id])
    else
        res.status(400).send({
            message:"Invalid ID"
        })
})

router.post('/',(req,res)=>{
    if(req.body.name && req.body.email && req.body.mobile)
    {
        let student = students.filter((e)=>e.email===req.body.email)
        if(student.length===0)
        {
            students.push(req.body)
            res.status(200).send({
                message:"Student Added Successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:`${req.body.email} already exists`
            })
        }
    }
    else
    {
        res.status(400).send({
            message:"Name, Email, Mobile is mandatory!"
        })
    }
})

router.put('/:id',(req,res)=>{
    if(req.params.id<students.length)
    {
        students.splice(req.params.id,1,req.body)
        res.status(200).send({
            message:"Details Updated Successfully!"
        })
    }
    else
    {
        res.status(400).send({
            message:"Invalid ID"
        })
    }
})

router.delete('/:id',(req,res)=>{
    if(req.params.id<students.length)
    {
        let deletedData = students.splice(req.params.id,1)
        res.status(200).send({
            message:"Details Deleted Successfully!",
            data:deletedData
        })
    }
    else
    {
        res.status(400).send({
            message:"Invalid ID"
        })
    }
})

module.exports = router