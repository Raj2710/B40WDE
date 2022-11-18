import React,{useContext} from 'react'
import BasicCard,{ProgressCard} from './Card'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'
// import Progresscard from './Progresscard'
import { ToastContainer, toast } from 'react-toastify';
import { StudentContext } from "./ContextComponents/StudentContextComponent";
import {DashboardContext} from './ContextComponents/DashboardContextComponent'

function Dashboard() {
    let navigate = useNavigate()
    let dashContext = useContext(DashboardContext)
    let context = useContext(StudentContext)

   let  handleDelete = (i)=>{
    toast.error(`${context.students[i].name} Deleted Successfully`)
    let newArray = [...context.students]//deep copy or clone the state
    newArray.splice(i,1)//delete the element in the new array
    context.setStudents(newArray)//update the state with the new Array

   }
  return <div id="content-wrapper" className="d-flex flex-column">
  <div id="content">
      <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                      className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>
          <div className="row">
            <BasicCard data = {{value:dashContext.earningsMonthly,icon:'fa-calendar',cardBorder:'primary'}}/>
            <BasicCard data = {{value:dashContext.earningsAnnual,icon:'fa-calendar',cardBorder:'success'}}/>
            <ProgressCard value={dashContext.taskCompletion} icon={'fa-clipboard-list'} cardBorder={'info'}/>
            <BasicCard data = {{value:dashContext.pendingRequests,icon:'fa-comments',cardBorder:'warning'}}/>
          </div>

          <div className='row'>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Batch</th>
          <th>Session Time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            context.students.map((e,i)=>{
                return <tr key={i}>
                    <td>{i+1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.mobile}</td>
                    <td>{e.batch}</td>
                    <td>{e.sessionTime}</td>
                    <td>
                        <Button variant='primary' 
                        onClick={()=>navigate(`/edit-user/${i}`)}> 
                        <i className="fas fa-fw fa-pen"></i> Edit
                        </Button>
                        &nbsp;&nbsp;
                        <Button variant='danger' onClick={()=>handleDelete(i)}> <i className="fas fa-fw fa-trash"></i> Delete</Button>
                    </td>
                </tr>
            })
        }
      </tbody>
    </Table>
          </div>



      </div>

  </div>

  {/* <!-- Footer --> */}
  <footer className="sticky-footer bg-white">
      <div className="container my-auto">
          <div className="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2021</span>
          </div>
      </div>
  </footer>
  {/* <!-- End of Footer --> */}
<ToastContainer
autoClose={3000}
/>
</div>
}

export default Dashboard