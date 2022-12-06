import { ACTIONS } from "./action"
export const initialValues = {
    todo:[]
}

export function TodoReducer(state,action){
    switch(action.type)
    {
        case ACTIONS.ADD:
            var newArray = [...state.todo]
            newArray.push(action.payload)
            return {...state,todo:newArray}
        
        case ACTIONS.CHANGE:
            var newArray = [...state.todo]
            newArray[action.payload.index].status=action.payload.status
            return {...state,todo:newArray}
        case ACTIONS.RESET:
            return initialValues
    }
}