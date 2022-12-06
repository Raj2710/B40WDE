import React,{useContext,useState} from 'react'
import {ACTIONS} from '../ReducerComponent/action'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ReducerContext } from './../../App'

function Todo() {
    
    let {state,dispatch} = useContext(ReducerContext)
    let [task,setTask] = useState("")
  return <div className='container-fluid'>
    <h1>Simple Todo to Understand UseReducer</h1>
     <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={task} onChange={(e)=>setTask(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" onClick={()=>{
        dispatch({type:ACTIONS.ADD,payload:{
            task,
            status:false
        }})
        setTask("")
      }}>
        Submit
      </Button>
      &nbsp;
      <Button variant="primary" onClick={()=>{
        dispatch({type:ACTIONS.RESET})
        setTask("")
      }}>
        Reset
      </Button>
      <h2>List of Tasks</h2>
        <ul>
        {
            state.todo.map((e,i)=>{
                return <div key={i}>
                    {
                        e.status?
                        <li onClick={()=>{
                            dispatch({type:ACTIONS.CHANGE,payload:{index:i,status:false}})
                        }}>
                            <s>{e.task}</s>
                        </li>:
                        <li onClick={()=>{
                            dispatch({type:ACTIONS.CHANGE,payload:{index:i,status:true}})
                        }}>
                            {e.task}
                        </li>
                    }
                </div>
            })
        }
      </ul>
  </div>
}

export default Todo