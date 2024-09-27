import { useEffect, useState } from "react"
function UseEffectHook(){
    const [age,setAge] = useState(10)
    const [count,setCount] = useState(20)

    /** 1 this version of useEffect will get called in each and every render
     * useEffect(()=>{
     * })
     */

    useEffect(()=>{
        console.log("i am 1st version of useEffct")
        return ()=>{
            console.log("unmounting")
        }
    })

    /** 2 this version of useEffct will get callaed on very first render
     * useEffect(()=>{
     * },[])
     * 
     */

    useEffect(()=>{
        console.log("i am 2nd version of useEffct")
    },[])

    /** 3 this version of useEffect will get called on very first render
     *  as well as wheneever you change deps array
     * useEffect(()=>{
     * 
     * },[state,props])
     */

    useEffect(()=>{
        console.log("i am third version of useEffct")
    },[age])

    const incrementAge = ()=>{
        setAge(age+1)
    }

    const incrementCount = ()=>{
        setCount(count+1)
    }


    return(
        <div>
            <h3>use effect hook demo----------------------</h3>
            <h3>Age is {age}</h3>
            <button onClick={()=>incrementAge()}>increment age</button>
            <h3>Count is {count}</h3>
            <button onClick={()=>incrementCount()}>increment count</button>
        </div>
    )
}

export default UseEffectHook