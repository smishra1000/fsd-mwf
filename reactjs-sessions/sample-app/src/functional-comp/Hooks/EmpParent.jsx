import { useEffect, useState } from "react"
import EmpChild from "./EmpChild"

function EmpParent(){
    const [parentAge,setParentAge] = useState(60)
    const [childAge,setChildAge] = useState(20)

    // console.log("1")

    // useEffect(()=>{
    //     console.log("2")
    // },[])

    const changeAge = ()=>{
        setParentAge(parentAge+1)
        // setChildAge(childAge+1)
    }
    return(
        <div>
            <h4>Employee parent component</h4>
            <h4>parent age is {parentAge}</h4>
            <button onClick={()=>changeAge()}>Change age</button>
            <EmpChild age={childAge} changeAge={changeAge}/>
        </div>
    )
}

export default EmpParent

//1,3,4,2