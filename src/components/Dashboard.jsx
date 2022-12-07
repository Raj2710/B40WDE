import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {deleteuser} from './../redux/usersSlice'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'

function Dashboard() {
  let data = useSelector((state)=>state.users.usersData)
  let dispatch = useDispatch()
  let navigate = useNavigate()
  return <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Batch</th>
          <th>Actions</th>
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
              <td>{e.batch}</td>
              <td>
                <Button variant='primary' onClick={()=>{
                  navigate(`/edit-user/${i}`)
                }}>Edit</Button>
                &nbsp;&nbsp;
                <Button variant='danger' onClick={()=>{
                    dispatch(deleteuser({id:i}))
                }}>Delete</Button>
              </td>
            </tr>
          })
       }
       
      </tbody>
    </Table>
  </div>
}

export default Dashboard