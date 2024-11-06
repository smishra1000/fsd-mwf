import { useCallback, useEffect, useState } from "react"
import EmpChild from "./EmpChild"

function EmpParent(){
    const [parentAge,setParentAge] = useState(60)
    const [childAge,setChildAge] = useState(20)
    const [counter,setCounter] = useState(0)

    console.log("parent render")

    // console.log("1")

    // useEffect(()=>{
    //     console.log("2")
    // },[])

    const changeAge = useCallback(()=>{
        setParentAge(parentAge+1)
        // setChildAge(childAge+1)
    },[parentAge])

    const increment = ()=>{
        setCounter(counter+1)
    }

    return(
        <div>
            <h4>Employee parent component</h4>
            <h4>parent age is {parentAge}</h4>
            <h4>counter is {counter}</h4>
            <button onClick={()=>changeAge()}>Change age</button>
            <button onClick={()=>increment()}>Incerement</button>
            <EmpChild age={childAge} changeAge={changeAge}/>
        </div>
    )
}

export default EmpParent

//1,3,4,2


//100% locked

//render ,re-render  whay component re-render , react.memo ,useCallback hook,useMemo hook

let a=20

function show(){
    // console.log(a);//undefined
    let a=104
    console.log(a);//104
}
console.log(a);//20

show();

