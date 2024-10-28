import React,{ useEffect } from "react"
function EmpChild(props){
    console.log("render")
    // console.log("3")

    // useEffect(()=>{
    //     console.log("4")
    // },[])

    return(
        <div>
            <h4>Employee child component</h4>
            <h4>child age is {props.age}</h4>
        </div>
    )
}

export default React.memo(EmpChild)