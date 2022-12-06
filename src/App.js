import { Routes, Route,Navigate } from 'react-router-dom';
import React,{useState,useReducer} from 'react';
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
import Todo from './components/Hooks/Todo';
import {TodoReducer,initialValues} from './components/ReducerComponent/TodoReducer'
export const ReducerContext = React.createContext()

function App() {
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

  let [state,dispatch] = useReducer(TodoReducer,initialValues)

  return <div id='wrapper'>
  <ReducerContext.Provider value={{state,dispatch}}>
  <SideBar/>
      <Routes>
          <Route path='/dashboard' element={
            <DashboardContextComponent>
              <StudentContextComponent students={students} setStudents={setStudents}>
                <Dashboard/>
              </StudentContextComponent>
            </DashboardContextComponent>}/>
          <Route path='/add-user' element={
            <StudentContextComponent students={students} setStudents={setStudents}>
              <AddUser/>
            </StudentContextComponent>}/>
          <Route path='/edit-user/:id' element={
            <StudentContextComponent students={students} setStudents={setStudents}>
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
          <Route path='todo' element={<Todo/>}/>
        </Route>

        {/* API Related Routes */}
        <Route path='/all-users' element={<DashboardAPI/>}/>
        <Route path='/add-users' element={<AddUserAPI/>}/>
        <Route path='/add-users/:id' element={<AddUserAPI/>}/>
        <Route path='*' element={<Navigate to={'/dashboard'}/>}/>
      </Routes>
      </ReducerContext.Provider>
  </div>
}

export default App;
