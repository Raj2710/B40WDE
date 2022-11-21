import React,{useReducer} from 'react'
import Button from 'react-bootstrap/Button';
import {CountReducer,initialValue} from './CountReducer';

function UseReducer() {
    let [state,dispatch] = useReducer(CountReducer,initialValue)
  return <div>
    <h1>useReducer</h1>
    <Button variant='danger' onClick={()=>dispatch({type:'decrement'})}>-</Button>
    &nbsp; {state.count} &nbsp;
    <Button variant='success' onClick={()=>dispatch({type:'increment'})}>+</Button>
     &nbsp; 
    <Button variant='warning' onClick={()=>dispatch({type:'reset'})}>Reset</Button>

    <div>
      <input type='text'  onChange={(e)=>dispatch({type:'change-name',value:e.target.value})}/>
    </div>
    <div>{state.name}</div>
  </div>
}

export default UseReducer