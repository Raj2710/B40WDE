import React,{useState} from 'react'
export const StudentContext = React.createContext()

function StudentContextComponent({children,students,setStudents}) {
    
  return <>
    <StudentContext.Provider value={{students,setStudents}}> 
        {children}
    </StudentContext.Provider>
    </>
}

export default StudentContextComponent