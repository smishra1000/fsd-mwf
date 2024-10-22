import { useState,useEffect } from "react"

function EmployeesList() {

    const [employees, setEmployees] = useState([
        { id: 101, name: "test1", age: 20, address: "hyd" }, 
        { id: 102, name: "test2", age: 22, address: "Blr" },
        { id: 103, name: "test3", age: 24, address: "Pune" }
    ])

    useEffect(()=>{
        
    })
    return (
        <div className="container">
            <h4>Employeees list</h4>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => {
                        return (
                            <tr>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.age}</td>
                                <td>{employee.address}</td>
                            </tr>
                        )
                    })}
                    </tbody>
            </table>
        </div>
    )
}


export default EmployeesList