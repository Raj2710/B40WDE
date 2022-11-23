import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios';



function AddUserAPI() {
  let navigate = useNavigate()
  let params = useParams()
  let [firstName,setFName] = useState("")
  let [lastName,setLName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [dob,setDob] = useState("")
  let [batch,setBatch] = useState("")

  let handleSubmit = async()=>{
    let data = {
        firstName,
        lastName,
        email,
        mobile,
        dob,
        batch
    }
    if(params.id)
    {
        try {
            let res = await axios.put(`https://61ee1f7ed593d20017dbac50.mockapi.io/students/${params.id}`,data)
            if(res.status===200)
            {
                navigate('/all-users')
            }
        } catch (error) {
            console.log(error)
        }
    }
    else
    {
        try {
            let res = await axios.post('https://61ee1f7ed593d20017dbac50.mockapi.io/students',data)
            if(res.status===201)
            {
                navigate('/all-users')
            }
        } catch (error) {
            console.log(error)
        }
    }
  }

  let getData = async ()=>{
    try {
        let res = await axios.get(`https://61ee1f7ed593d20017dbac50.mockapi.io/students/${params.id}`)
        if(res.status===200)
        {
            setFName(res.data.firstName)
            setLName(res.data.lastName)
            setEmail(res.data.email)
            setMobile(res.data.mobile)
            setDob(res.data.dob)
            setBatch(res.data.batch)
        }
        else
        {
            navigate('/all-users')
        }
    } catch (error) {
        navigate('/all-users')
    }
  }

  useEffect(()=>{
    if(params.id)
    {
        getData()
    }
  },[])

  return <div className='container-fluid'>
      <Form>
      <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" value={firstName} placeholder="Enter Name"  onChange={(e)=>setFName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" value={lastName} placeholder="Enter Name"  onChange={(e)=>setLName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" value={mobile} placeholder="Enter Mobile"  onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>DOB</Form.Label>
        <Form.Control type="date" value={dob} placeholder="Enter DOB"  onChange={(e)=>setDob(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" value={batch} placeholder="Enter Batch"  onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
    </div>
}

export default AddUserAPI