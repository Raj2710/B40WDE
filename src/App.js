import { Routes, Route,Navigate } from 'react-router-dom';
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
  return <div id='wrapper'>
  
  <SideBar/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard data={data}/>}/>
      <Route path='/add-user' element={<AddUser/>}/>
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
