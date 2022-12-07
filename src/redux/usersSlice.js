import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
    name:'users',
    initialState:{
        usersData:[
            {
                firstName:"Nag",
                lastName:"Raj",
                email:"nag@gmail.com",
                mobile:"9659577321",
                batch:"B40WDE"
            },
            {
                firstName:"Nag",
                lastName:"Raj",
                email:"nag@gmail.com",
                mobile:"9659577321",
                batch:"B40WDE"
            },
            {
                firstName:"Nag",
                lastName:"Raj",
                email:"nag@gmail.com",
                mobile:"9659577321",
                batch:"B40WDE"
            }
        ]
    },
    reducers:{
        adduser:(state,action)=>{
            state.usersData.push(action.payload)
        },
        edituser:(state,action)=>{
            state.usersData.splice(action.payload.id,1,action.payload.data)
        },
        deleteuser:(state,action)=>{
            state.usersData.splice(action.payload.id,1)
        }
    }
})

export const {adduser,edituser,deleteuser} = usersSlice.actions
export default usersSlice.reducer