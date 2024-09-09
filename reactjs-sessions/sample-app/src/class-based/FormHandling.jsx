import React from "react";

class FormHandling extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            address: "",
            employees: []
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

        let emp = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address
        }
        let empList = this.state.employees;
        empList.push(emp)
        this.setState({ employees: empList })
        this.setState({ name: "", email: "", address: "" })
    }

    deleteEmployee(e,el){
        let newList = this.state.employees.filter((item)=>{
            return item.email!==el.email
        })

        this.setState({employees:newList})
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
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <div className="row">
                    {this.state.employees.map((item) => {
                        return (
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5>{item.name}</h5>
                                        <h5>{item.address}</h5>
                                        <p>{item.email}</p>
                                    </div>
                                    <div>
                                        <button className="btn btn-danger" onClick={(e)=>this.deleteEmployee(e,item)}>delete</button>
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