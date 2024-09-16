import React from "react";

class Blogs extends React.Component {
    constructor() {
        super();

        this.state = {
            name:"sameer mishra",
            age:20,
            email:"test1@gmail.com",
            address:{
                city:"hyd",
                pin:'434343434',
            },
            blogs: [
                { id: 1, title: "MERN STACK", description: "MERN is javascript absed tech stack mongo express react node", author: "sameer mishra" },
                { id: 2, title: "PYHTON", description: "Pyhton is used for gaming and web app uisng flask api", author: "sameer mishra" },
                { id: 3, title: "JAVA", description: "Java is oops language", author: "sameer mishra" },
                { id: 1, title: "MERN STACK", description: "MERN is javascript absed tech stack mongo express react node", author: "sameer mishra" },
                { id: 2, title: "PYHTON", description: "Pyhton is used for gaming and web app uisng flask api", author: "sameer mishra" },
                { id: 3, title: "JAVA", description: "Java is oops language", author: "sameer mishra" }
            ]
        }
    }
    render() {
        return (
            <div>
                <h3>My Blogs</h3>
                <h1>name{this.state.name}</h1>
                <h1>age: {this.state.age}</h1>
                <h1>email:{this.state.email}</h1>
                <h4>city: {this.state.address.city}</h4>
                <h4>pin {this.state.address.pin}</h4>
                <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>

                {this.state.blogs.map((item) => {
                    return (
                        <div style={{ border: '2px solid grey', width: '300px', height: '200px', boxShadow: '2px 2px 0 grey',padding:'10px' }}>
                            <h2>Blog Title:{item.title}</h2>
                            <h4>{item.description}</h4>
                        </div>
                    )
                })}
                </div>

            </div>
        )

    }

    componentWillUnmount(){
        console.log("componenet will unmount is calling from blogs")
    }
}

export default Blogs