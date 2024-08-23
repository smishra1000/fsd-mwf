import React from "react";

class Employee extends React.Component{
    constructor(){
        super()
        this.state={
            empName:"sameer1",
            salary:10000,
            email:"sameer1@gmail.com",
            colors:["red","blue"]
        }
    }

    render(){
        return(
            <div>
                <h1>Employee Component</h1>
                <h1>Name: {this.state.empName}</h1>
                <h2>Salary :{this.state.salary}</h2>
                <h2>Eamil: {this.state.email}</h2>
            </div>
        )
    }
}

export default Employee