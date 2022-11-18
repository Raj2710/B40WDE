import React,{useState} from 'react'
export const StudentContext = React.createContext()

function StudentContextComponent({children}) {
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
  return <>
    <StudentContext.Provider value={{students,setStudents}}> 
        {children}
    </StudentContext.Provider>
    </>
}

export default StudentContextComponent