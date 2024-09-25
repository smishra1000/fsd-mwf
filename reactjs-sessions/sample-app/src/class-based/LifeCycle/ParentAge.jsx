import React from "react";
import ChildAge from "./ChildAge";

class ParentAge extends React.Component{
    constructor(props){
        super(props)
        console.log("1 constructor")
        this.state={
            pAge:50
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log("2 getDerivedStateFromProps")
        return {
            pName:props.name
        }
    }

    updateAge = ()=>{
        this.setState({pAge:this.state.pAge+1})
    }

    render(){
        console.log("3 render")
        return(
            <div>
                <h3>Parent age component</h3>
                <h3>Age of parent : {this.state.pAge}</h3>
                <h3>Name of parent is {this.state.pName} </h3>
                <button onClick={()=>this.updateAge()}>update parentAge</button>
                <h6>Child componenet here</h6>
                <ChildAge/>
            </div>
        )
    }

    componentDidMount(){
        console.log("4 componentDidMount")
        // fetch("https://jsonplaceholder.typicode.com/users").then(function(res){
        //     return res.json()
        // }).then(function(data){
        //     console.log(data)
        // })
    }

    shouldComponentUpdate(){
        console.log("3. update phase shouldComponentUpdate from parent")
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log(" 4. update phase getsnapshot from parent")
    }
     componentDidUpdate(){
        console.log(" 5. update phase getsnapshot from parent")
     }
}

export default ParentAge