import React from 'react'
import {Link,Outlet} from 'react-router-dom'

function Hooks() {
  return <div className='container-fluid'>
    <h3 style={{"textAlign":"center"}}>Welcome to the documentation of Hooks.</h3>
    <h5>List of Hooks implemented in sessions are</h5>
    <ul>
     <Link to='useref'>
        <li>useRef</li>
      </Link>
      <Link to='usememo'>
        <li>useMemo/callback</li>
      </Link>
      <Link to='usereducer'>
        <li>useReducer</li>
      </Link>
      <Link to='/hooks'>
        <li>Hooks-Home</li>
      </Link>
    </ul>
    <Outlet/>
  </div>
}

export default Hooks