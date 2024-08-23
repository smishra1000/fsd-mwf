import React from "react";

class User extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"test1",
            age:20,
            email:"test1@gmail.com"
        }
        
    }

    render(){
        return(
            <div>
                <h1>User Info</h1>
                <h3>Name: test1</h3>
                <h3>Age :30</h3>
            </div>
        )
    }

}

export default User










