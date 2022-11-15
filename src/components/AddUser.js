import React from 'react'
import {useNavigate} from 'react-router-dom'


function AddUser() {
  let navigate = useNavigate()
  return (
    <div>
      <button className='btn btn-primary' onClick={()=>{
        //save forms is completed
        alert("Data saved Successfully")
        navigate('/dashboard')
      }}>
        Submit
      </button>
    </div>
  )
}

export default AddUser