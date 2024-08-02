import React from "react";

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            title:"Home Page",
            age:20
        }
    }

    render(){
        return(
            <div>
                <h1>class based componenet</h1>
                <h3>Title is :  {this.state.title}</h3>
                <h3>age is :  {this.state.age}</h3>
            </div>
        )
    }
}

export default Home