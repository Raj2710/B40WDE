import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { url } from '../App';

function Dashboard() {
    let token = sessionStorage.getItem('token')
    let [data,setData] = useState([])
    let navigate = useNavigate()


    let getData = async()=>{
        try {
            let res = await axios.get(`${url}/users/all`,
            {
              headers:{ Authorization:`Bearer ${token}`}
            })
            if(res.status===200)
                setData(res.data.data)
        } catch (error) {
            if(error.response.status!==200)
            {
                alert(error.response.data.message)
                sessionStorage.clear()
                navigate('/login')
            }
        }
    }

    useEffect(()=>{
        if(token)
        {
            getData()
        }
        else
        {
            navigate('/login')
        }
    },[])
  return <div className='container-fluid'>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Role</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((e,i)=>{
                return <tr key={i}>
                    <td>{i+1}</td>
                    <td>{e.firstName}</td>
                    <td>{e.lastName}</td>
                    <td>{e.email}</td>
                    <td>{e.mobile}</td>
                    <td>{e.role}</td>
                    <td>{e.createdAt}</td>
                </tr>
            })
        }
      </tbody>
    </Table>
    <Button variant="primary" onClick={()=>getData()}>Refresh</Button>
    <Button variant="danger" onClick={()=>{
        sessionStorage.clear()
        navigate('/login')
    }}>Logout</Button>
  </div>
}

export default Dashboard