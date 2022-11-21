import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function NestedRoute() {
  return <div style={{display:"flex",flexDirection:"column"}}>
    <div><h1>Nested Route Component</h1></div>
    <div><p>In this component we are going to see the concept of nested routings</p></div>
    <div>
        <ul>
            <li><Link to='profile'><b>Profile</b></Link></li>
            <li><Link to='account'><b>Account</b></Link></li>
            <li><Link to='/nested-route-example'><b>Home of Nested Route</b></Link>
            </li>
        </ul>
    </div>
    <Outlet/>
  </div>
}

export default NestedRoute