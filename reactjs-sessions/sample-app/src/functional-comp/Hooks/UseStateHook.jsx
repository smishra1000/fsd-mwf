import { useState } from "react"
function UseStateHook(){
    const [age,setAge] = useState(10)
    const [name,setName] = useState("test1")
    const [roll,setRoll] = useState("101")

    const [users,setUsers] = useState([{id:1,name:"test1"},{id:2,name:"test2"}])

    const [address,setAddress] = useState({street:"123/34",pinCode:"123444",location:'Hyd'})

    const updateAge = ()=>{
        setAge(age+5)
    }

    const updateName = ()=>{
        setName("test100")
    }
    const updateAddress = ()=>{
        setAddress((prevState)=>{
            return{
                ...prevState,
                street:"123/1000"
            }
        })
    }

    const updateUsers =()=>{
        //setUsers([{id:3,name:"test3"}])

        setUsers((prev)=>{
            return[
                ...prev,
                {id:3,name:"test3"}
            ]
        })
    }

    return(
        <div>
            <h3>UseState hook demo-----------------------------</h3>
            <h3>Age is {age}</h3>
            <h3>Name : {name}</h3>
            <ul>
                {users.map((item)=>{
                    return(
                        <li>id: {item.id} name: {item.name}</li>
                    )
                })}
            </ul>

            <div>
                <h4>Address Data</h4>
                <p>Street : {address.street}</p>
                <p>pincode :{address.pinCode}</p>
            </div>

            <div>
                <h3>Update state data in func component</h3>
                <button onClick={()=>updateAge()}>update age</button>
                <button onClick={()=>updateName()}>update name</button>
                <button onClick={()=>setRoll("103")}>update roll</button>
                <button onClick={()=>updateAddress()}>update address</button>
                <button onClick={()=>updateUsers()}>update users</button>
            </div>

        </div>
    )
}

export default UseStateHook