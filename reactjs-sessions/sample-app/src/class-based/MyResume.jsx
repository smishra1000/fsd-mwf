import React from "react";

class MyResume extends React.Component{
    constructor(){
        super()
       this.state = {
        name:"test1",
        email:"test1@gmail.com",
        age:20,
        prevSal:10000,
        experience:"4yr",
        currentComp:"ABC"
       }
    }

    render(){
        return(
            <div>
                <div style={{width:'500px',border:'2px solid #ddd',padding:'20px'}}>
                    <h1>{this.state.name}</h1>
                    <p>{this.state.email}</p>
                    <hr/>
                    <h4>experience: {this.state.experience}</h4>
                </div>
            </div>
        )
    }
}

export default MyResume