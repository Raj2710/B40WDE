import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,reset} from './counterSlice'
import Button from 'react-bootstrap/Button';

function Counter() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  return <div className='container-fluid'>
    <div style={{"textAlign":"center"}}>
      <h3>Counter</h3>
      <Button variant='success' onClick={()=>dispatch(increment())}>+</Button>
        &nbsp;&nbsp;
          <span style={{"fontSize":"20px"}}>{count}</span>
        &nbsp;&nbsp;
      <Button variant='danger' onClick={()=>dispatch(decrement())}>-</Button>
      <div>
        <br></br>
      <Button variant='warning' onClick={()=>dispatch(reset())}>Reset</Button>
      </div>
    </div>
  </div>
}

export default Counter