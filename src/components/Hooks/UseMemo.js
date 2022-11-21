import React,{useState,useMemo} from 'react'

function UseMemo() {
    let [number,setNumber] = useState(0)
    let multipleValue = useMemo(()=>{
        return slowFunction(number)
    },[number])
  return <>
  <h1>useMemo</h1>
  <div>An example to show the useMemo for expensive calculations</div>
  <input type={'number'} value={number} onChange={(e)=>setNumber(parseInt(e.target.value))}></input>
  <div>Multiple Value</div>
  <div>{multipleValue}</div>

  <h1>UseCallback</h1>
  <div>useCallback and useMemo both expect a function and an array of dependencies. The difference is that useCallback returns its function when the dependencies change while useMemo calls its function and returns the result.</div>
  </>
}

function slowFunction(num){
    for(let i=0;i<1000000000;i++){}
    return num * 2
}

export default UseMemo