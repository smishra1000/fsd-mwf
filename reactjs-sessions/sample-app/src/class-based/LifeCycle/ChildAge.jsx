import React from "react";

class ChildAge extends React.Component{
    constructor(){
        console.log("1. constrcutor from child")
        super()
        this.state = {
            cAge:20
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log("2.getDerivedStateFromProps from child ")
    }


    render(){
        console.log("3. render from child")
        return(
            <div>
                <h3>Child age component</h3>
                <h3>Child Age is {this.state.cAge}</h3>
            </div>
        )
    }

    componentDidMount(){
        console.log("4. componentDidMount from child")
    }

    // shouldComponentUpdate(){
    //     console.log("3. update phase shouldComponentUpdate from child")
    // }

    getSnapshotBeforeUpdate(){
        console.log(" 4. update phase getsnapshot from child")
    }
     componentDidUpdate(){
        console.log(" 5. update phase getsnapshot from child")
     }
}

export default ChildAge