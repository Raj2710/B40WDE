export let initialValue = {count:1,name:"",total:300}
export function CountReducer(state,action) {
    switch(action.type){
        case 'increment':return {...initialValue,count:state.count+1}
        case 'decrement':return {...initialValue,count:state.count-1}
        case 'reset': return {count:1,total:300}
        case 'multiple':return {...initialValue,count:state.count,total:Number(state.total)*Number(state.count)}
        case 'change-name':return {...initialValue,name:action.value}
        default: return {...initialValue}
    }
}