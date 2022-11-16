import { Routes, Route,Navigate } from 'react-router-dom';
import { useState } from 'react';
import SideBar from './components/SideBar'
import Dashboard from './components/Dashboard'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import './App.css';
import NestedRoute from './components/NestedRoute';
import Profile from './components/Profile'
import Account from './components/Account';

function App() {
  let data = {
    earningsMonthly:"40,000",
    earningsAnnual:"2,40,000",
    taskCompletion:"40",
    pendingRequests:"18"
  }
let [students,setStudents] = useState([
  {
    name:"Nag",
    email:"nag@gmail.com",
    mobile:"1231231231",
    sessionTime:"10am to 12pm",
    batch:"B40WDE"
  },
  {
    name:"Prathap",
    email:"prathap@gmail.com",
    mobile:"3213213211",
    sessionTime:"10am to 12pm",
    batch:"B40WDE"
  },
  {
    name:"Ambika",
    email:"ambika@gmail.com",
    mobile:"9908989899",
    sessionTime:"10am to 12pm",
    batch:"B40WDE"
  },
  {
    name:"Anish",
    email:"anish@gmail.com",
    mobile:"9097658754",
    sessionTime:"10am to 12pm",
    batch:"B40WDE"
  }
])

  return <div id='wrapper'>
  
  <SideBar/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard data={data} students={students} setStudents={setStudents}/>}/>
      <Route path='/add-user' element={<AddUser students={students} setStudents={setStudents}/>}/>
      <Route path='/edit-user/:id' element={<EditUser/>}/>
      <Route path='/nested-route-example' element={<NestedRoute/>}>
          <Route path='profile' element={<Profile/>}/>
          <Route path='account' element={<Account/>}/>
      </Route>
      {/* <Route path='*' element={<AddUser/>}/> */}
      <Route path='*' element={<Navigate to={'/dashboard'}/>}/>
    </Routes>
  </div>
}

export default App;
