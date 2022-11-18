import React, { useState,useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import { StudentContext } from "./ContextComponents/StudentContextComponent";



function AddUser() {
  let navigate = useNavigate()
  let context = useContext(StudentContext)
  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [batch,setBatch] = useState("")
  let [sessionTime,setSessionTime] = useState("10am to 12pm")

  let handleSubmit = ()=>{

    let newArray = [...context.students]
    newArray.push({
      name,
      email,
      mobile,
      batch,
      sessionTime
    })
    context.setStudents(newArray)
    navigate('/dashboard')
    toast.success(`${name} addedd Successfully`)
  }

  return <div className='container-fluid'>
      <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name"  onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile"  onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter Batch"  onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
     
      <Form.Select  onChange={(e)=>setSessionTime(e.target.value)} defaultValue="0">
            <option value ="0" disabled>Session Time</option>
            <option value="10 am to 12pm">10 am to 12pm</option>
            <option value="12 pm to 2pm">12 pm to 2pm</option>
            <option value="2 pm to 4pm">2 pm to 4pm</option>
            <option value="4 pm to 6pm">4 pm to 6pm</option>
          </Form.Select>
      </Form.Group>
     
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
    </div>
}

export default AddUser