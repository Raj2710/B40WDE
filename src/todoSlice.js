import {createSlice} from '@reduxjs/toolkit'
export const todoSlice = createSlice({
    name:'todo',
    initialState:{
        tasks:[]
    },
    reducers:{
        add:(state,action)=>{
            state.tasks.push(action.payload)
        },
        change:(state,action)=>{
            state.tasks[action.payload.index].status = action.payload.status
        },
        reset:(state)=>{
            state.tasks = []
        }
    }
})

export const {add,change,reset} = todoSlice.actions

export default todoSlice.reducer