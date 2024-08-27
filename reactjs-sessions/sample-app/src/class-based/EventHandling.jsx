import React from "react";
class EventHandling extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            name: "sameer mishra"
        }
    }

    incerement = () => {
        // console.log("befor inceremneting counter is",this.state.counter)
        // this.state.counter = this.state.counter+1
        // console.log("after inceremneting counter is",this.state.counter)

        this.setState({counter:this.state.counter+1},()=>{
            console.log("after inceremnet counter is ",this.state.counter)
        })
        // this.setState({counter:this.state.counter+1})
        // this.setState({counter:this.state.counter+1})
        // this.setState({counter:this.state.counter+1})

        

        // this.setState({ counter: this.state.counter + 1 }, () => {
        //     this.setState({ counter: this.state.counter + 1 }, () => {
        //         this.setState({ counter: this.state.counter + 1 }, () => {
        //             this.setState({ counter: this.state.counter + 1 },()=>{
        //                 console.log(this.state.counter)
        //             })
        //         })
        //     })
        // })


    }

    decrement = () => {
        // console.log("befor decrementing counter is",this.state.counter)
        // this.state.counter =  this.state.counter-1
        // console.log("after decerementing counter is",this.state.counter)

        this.setState({ counter: this.state.counter - 1 })
    }

    changeName = () => {
        // this.state.name = "sameer12345"
        this.setState({ name: "sameer12345" })

        console.log(this.state.name)
    }

    render() {
        return (
            <div>
                <h2>counter value is: <span style={{ color: "red" }}>{this.state.counter}</span> </h2>
                <button onClick={this.incerement}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <h4>Name is : {this.state.name}</h4>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}

export default EventHandling