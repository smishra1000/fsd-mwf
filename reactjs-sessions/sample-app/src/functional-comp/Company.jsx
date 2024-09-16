import { useState } from "react"
function Company() {
    const [name,setName] = useState("Carrerx");
    console.log(useState(10))
    const [address,setAddress] = useState("Hyd");
    const [isMarried] = useState(false)
    const [age] = useState(40)
    const [employee] = useState({empName:"test1",email:"test1@gmail.com"})
    
    const updateName = ()=>{
        setName("carrerx updated")
    }

    const updateAddress = ()=>{
        setAddress("Blr")
    }
    return(
        <div>
            <h1>welocme to ABC Compny</h1>
            <h4>Name of company is {name}</h4>
            <h4>Address of compnay is {address}</h4>
            <h4>married status {isMarried.toString()}</h4>
            <h4>age is {age}</h4>
            <h4>employee info</h4>
            <h4>empName: {employee.empName}</h4>
            <h4>email: {employee.email}</h4>
            <button onClick={()=>updateName()}>chnageName</button>
            <button onClick={()=>updateAddress()}>change add</button>

        </div>
    )
}

export default Company