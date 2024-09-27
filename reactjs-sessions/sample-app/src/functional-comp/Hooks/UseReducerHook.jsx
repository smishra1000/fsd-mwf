
import { useReducer } from "react"

const initialState = {
    count:0
}

const counterReducer = (state,action)=>{
        if(action==="increment"){
            return {count:state.count+1}
        }else if(action==="decrement"){
            return {count:state.count-1}
        }else if(action==="reset"){
            return {count:0}
        }
        else{
            return state;
        }
}


function UseReducerHook(){

    const [state,dispatch] = useReducer(counterReducer,initialState)
    const increment = ()=>{
        //
        dispatch("increment")
    }
    const decrement = ()=>{
        dispatch("decrement")

    }

    const reset = ()=>{
        dispatch("reset")
    }
    return(
        <div>
            <h4>Use Reducer Hook demo</h4>
            <h4>counter is {state.count}</h4>
            <button onClick={()=>increment()}>increment</button>
            <button onClick={()=>decrement()}>decrement</button>
            <button onClick={()=>reset()}>reset</button>
        </div>
    )
}

export default UseReducerHook

// first import useRedcuer hook 
// create reducer function-from this function return new state always
// const [state,dispatch] = useReducer(reducerfn,initalState)
