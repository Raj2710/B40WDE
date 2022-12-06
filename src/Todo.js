import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {add,change,reset} from './todoSlice'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Todo() {
    let [task,setTask] = useState("")
    const tasks = useSelector((state)=>state.todo.tasks)
    const dispatch = useDispatch()

  return <div className='container-fluid'>
  <div style={{"textAlign":"center"}}>
    <h3>Todo</h3>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task</Form.Label>
        <Form.Control type="text" placeholder="Enter Task" value={task} onChange={(e)=>setTask(e.target.value)}/>
      </Form.Group>
      <Button variant='primary' onClick={()=>{
        dispatch(add({task,status:false}))
        setTask("")
        }}>Create</Button> 
      &nbsp;&nbsp;
      <Button variant='warning' onClick={()=>dispatch(reset())}>Reset</Button>
      <br/>
      <br/>
      <h3>List of Tasks</h3>
      <ul>
        {
            tasks.map((e,i)=>{
                return <div key={i}>
                    {
                        e.status?
                        <li onClick={()=>dispatch(change({index:i,status:false}))}>
                            <s>{e.task}</s></li>:
                        <li onClick={()=>dispatch(change({index:i,status:true}))}>{e.task}</li>
                    }
                </div>
            })
        }
      </ul>
    </div>
  </div>
}

export default Todo