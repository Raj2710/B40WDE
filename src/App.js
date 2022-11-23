import { Routes, Route,Navigate } from 'react-router-dom';
import React from 'react';
import SideBar from './components/SideBar'
import Dashboard from './components/CRUD/Dashboard'
import AddUser from './components/CRUD/AddUser'
import EditUser from './components/CRUD/EditUser'
import './App.css';
import NestedRoute from './components/NestedExample/NestedRoute';
import Profile from './components/NestedExample/Profile'
import Account from './components/NestedExample/Account';
import StudentContextComponent from './components/ContextComponents/StudentContextComponent';
import DashboardContextComponent from './components/ContextComponents/DashboardContextComponent';
import Hooks from './components/Hooks/Hooks';
import UseRef from './components/Hooks/UseRef';
import UseMemo from './components/Hooks/UseMemo';
import UseReducer from './components/Hooks/UseReducer';
import DashboardAPI from './components/CRUDAPI/DashboardAPI';
import AddUserAPI from './components/CRUDAPI/AddUserAPI';

function App() {

  return <div id='wrapper'>
  
  <SideBar/>
      <Routes>
          <Route path='/dashboard' element={
            <DashboardContextComponent>
              <StudentContextComponent>
                <Dashboard/>
              </StudentContextComponent>
            </DashboardContextComponent>}/>
          <Route path='/add-user' element={
            <StudentContextComponent>
              <AddUser/>
            </StudentContextComponent>}/>
          <Route path='/edit-user/:id' element={
            <StudentContextComponent>
              <EditUser/>
            </StudentContextComponent>}/>
          <Route path='/nested-route-example' element={<NestedRoute/>}>
              <Route path='profile' element={<Profile/>}/>
              <Route path='account' element={<Account/>}/>
          </Route>
        {/* <Route path='*' element={<AddUser/>}/> */}
        <Route path='/hooks' element={<Hooks/>}>
          <Route path='useref' element={<UseRef/>}/>
          <Route path='usememo' element={<UseMemo/>}/>
          <Route path='usereducer' element={<UseReducer/>}/>
        </Route>

        {/* API Related Routes */}
        <Route path='/all-users' element={<DashboardAPI/>}/>
        <Route path='/add-users' element={<AddUserAPI/>}/>
        <Route path='/add-users/:id' element={<AddUserAPI/>}/>
        <Route path='*' element={<Navigate to={'/dashboard'}/>}/>
      </Routes>
  </div>
}

export default App;
