import React, { useState,useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useParams,useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { StudentContext } from "../ContextComponents/StudentContextComponent";

function EditUser() {
  let params = useParams()
  let navigate = useNavigate()
  let context = useContext(StudentContext)

  let [name,setName] = useState(context.students[params.id].name)
  let [email,setEmail] = useState(context.students[params.id].email)
  let [mobile,setMobile] = useState(context.students[params.id].mobile)
  let [batch,setBatch] = useState(context.students[params.id].batch)
  let [sessionTime,setSessionTime] = useState(context.students[params.id].sessionTime)

  // let getData = ()=>{
  //   setName(students[params.id].name)
  //   setEmail()
  //   setMobile()
  //   setBatch()
  //   setSessionTime()
  //   toast.success("Data Fetched Successfully")
  // }

  //without dependance array - it will load for the first time and every statechanges
  // useEffect(()=>{
  //   console.log("Use effect triggered")
  // })

  //with empty dependancy array - it will run for the first time alone
  // useEffect(()=>{
  //   getData()
  // },[])

  //with state variables in dependancy array - it will run for the first time and 
  // for every specifed state changes
  // useEffect(()=>{
  //   console.log("Use effect triggered")
  // },[name,email])

  let handleSubmit = ()=>{
    let newArray = [...context.students]
    newArray.splice(params.id,1,{
      name,
      email,
      mobile,
      batch,
      sessionTime
    })
    toast.success('User Edited Succseefully')
    context.setStudents(newArray)
    navigate('/dashboard')
  }

  return <div className='container-fluid'>
  <Form>
  <Form.Group className="mb-3" >
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Mobile</Form.Label>
    <Form.Control type="text" placeholder="Enter Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Batch</Form.Label>
    <Form.Control type="text" placeholder="Enter Batch" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" >
 
  <Form.Select  onChange={(e)=>setSessionTime(e.target.value)} defaultValue={sessionTime}>
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
<ToastContainer />
</div>
}

export default EditUser