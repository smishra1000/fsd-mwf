import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // name:"test1",
            // age:20,
            email:"test1@gmail.com"
        }
        
    }

    render(){
        const {name,age} = this.props
        return(
            <div>
                <h1>User Info</h1>
                <h3>Name: {name}</h3>
                <h3>Age :{age}</h3>
                <h3>email: {this.state.email}</h3>
                <h4>address : {this.props.address}</h4>
            </div>
        )
    }

}

export default User










