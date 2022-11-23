import React,{useRef,useState} from 'react'
import Button from 'react-bootstrap/Button';
function UseRef() {
    let ref = useRef(0)
    let [name,setName] = useState("")
    let handleChange = (e)=>{
        setName(e.target.value)
    }
    let handleSubmit=()=>{
        ref.current = ref.current+1
        setName('')
    }
    let inputRef = useRef()
  return <>
  <h1>useRef Case 1</h1>
  <div>An example to illustrate the useref to track the number of times a component re-render and limit the 
    access of the button to n times.
  </div>
  <br></br>
  <div> You have clicked this button {ref.current}/3 times</div>
  <input type={'text'} onChange={(e)=>handleChange(e)} value={name}></input> &nbsp;
    {
        ref.current<3?<Button variant="primary" onClick={()=>handleSubmit()}>
         Click Me</Button>:<Button disabled>Click Me</Button>
    }
    <br></br>
    <br></br>   
    <h1>useRef Case 2</h1>
    <div>An example where we can focus an input box on button click using useRef</div>
    <span>Focus Area: </span><input type={'text'} ref={inputRef}></input> &nbsp;
    <Button variant='success' onClick={()=>{
        inputRef.current.focus()
    }}>Focus</Button>
  </>
}

export default UseRef