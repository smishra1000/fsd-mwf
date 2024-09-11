import React from "react";

class FormHandling extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            id:"",
            email: "",
            address: "",
            employees: [],
            isUpdate: false
        }
    }

    onNameChange(e) {
        this.setState({ name: e.target.value })
    }

    onEmailChange(e) {
        this.setState({ email: e.target.value })
    }

    onAddressChange(e) {
        this.setState({ address: e.target.value })
    }

    onSave(e) {
        e.preventDefault();

        if (this.state.isUpdate === true) {
            /// update part
        let updatedEmployees = this.state.employees.map((item)=>{
            if(item.id===this.state.id){
                return {...item,name:this.state.name,email:this.state.email,address:this.state.address}
            }else{
                return item
            }
        })
        this.setState({employees:updatedEmployees, name: "", email: "", address: "",isUpdate: false})

        } else {
            let emp = {
                name: this.state.name,
                email: this.state.email,
                address: this.state.address,
                id:this.state.employees.length+1
            }
            let empList = this.state.employees;
            empList.push(emp)
            this.setState({ employees: empList })
            this.setState({ name: "", email: "", address: "" })
        }


    }

    deleteEmployee(e, el) {
        let newList = this.state.employees.filter((item) => {
            return item.email !== el.email
        })

        this.setState({ employees: newList })
    }
    editEmployee(e, el) {
        // need to implement
        console.log(el)
        this.setState({ isUpdate: true, name: el.name, email: el.email, address: el.address,id:el.id })
    }

    render() {
        return (
            <div className="container">
                <h2>Form Handling Demo</h2>
                <form onSubmit={(e) => this.onSave(e)}>
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" value={this.state.name} onChange={(e) => this.onNameChange(e)} />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Eamil</label>
                        <input type="text" class="form-control" value={this.state.email} onChange={(e) => this.onEmailChange(e)} />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Address</label>
                        <input type="text" class="form-control" value={this.state.address} onChange={(e) => this.onAddressChange(e)} />
                    </div>
                    {!this.state.isUpdate && <button type="submit" class="btn btn-primary">Submit</button>}
                    {this.state.isUpdate && <button type="submit" class="btn btn-success">Update</button>}
                </form>
                <div className="row mt-4">
                <input type="text" class="form-control" placeholder="search here"/>
                </div>
                <div className="row mt-4">
                    {this.state.employees.map((item) => {
                        return (
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Name: {item.name}</h3>
                                        <p>Email: {item.email}</p>
                                        <p>Address: {item.address}</p>
                                       
                                    </div>
                                    <div>
                                        <button className="btn btn-danger" onClick={(e) => this.deleteEmployee(e, item)}>delete</button>
                                        <button className="btn btn-warning" onClick={(e) => this.editEmployee(e, item)}>Edit</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default FormHandling