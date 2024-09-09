import React from "react";


class LifeCycleDemo extends React.Component{
    constructor(props){
        console.log("1. constructor calling")
        super(props)
        this.state = {
            counter:0
        }
    }

    static getDerivedStateFromProps(props){
        console.log("2. getDerivedStateFromProps")
        return {
            age:props.age
        }
    }

    increment = ()=>{
        this.setState({counter:10})
    }

    render(){
        console.log("3. render calling")
        return(
            <div>
                <h3>LifeCycle demo</h3>
                <h3>counter value is {this.state.counter}</h3>
                <button className="btn btn-primary"  onClick={this.increment}>increment</button>
                <h4>My age is {this.state.age}</h4>
                <button className="btn btn-danger">Logout</button>
            </div>
        )
    }

    componentDidMount(){
        console.log("4. componnetdidmount calling")
    }

    // update phase methods 
    shouldComponentUpdate(props,state){
        console.log(props,state)
        console.log("2. update phase shouldComponentUpdate")
        if(this.state.counter===state.counter){
            return false
        }else{
            return true
        }
    }

    getSnapshotBeforeUpdate(){
        console.log("4. update phase getSnapshotBeforeUpdate")
    }

    componentDidUpdate(){
        console.log("5. update phase componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("componennt unmounting")
    }
}

export default LifeCycleDemo