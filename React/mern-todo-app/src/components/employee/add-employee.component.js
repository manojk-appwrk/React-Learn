import React, { Component } from 'react';
import axios from 'axios';
//import Datetime from 'react-datetime';
// var moment = require('moment');

export default class CreateEmployee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emp_Name: '',
            emp_phone: '',
            emp_email: '',
            emp_dob: ''
        }

        this.onChangeEmpName = this.onChangeEmpName.bind(this);
        this.onChangeEmpPhone = this.onChangeEmpPhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    // Defining the methods
    onChangeEmpName(e) {
        this.setState({
            emp_Name: e.target.value
        });
    }
    onChangeEmpPhone(e) {
        this.setState({
            emp_phone: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            emp_email: e.target.value
        });
    }
    onChangeDOB(e) {
        this.setState({
            emp_dob: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        const newEmployee = {
            emp_Name: this.state.emp_Name,
            emp_phone: this.state.emp_phone,
            emp_email: this.state.emp_email,
            emp_dob: this.state.emp_dob
        };

        axios.post('http://localhost:4000/employees/add', newEmployee)
            .then(res => console.log(res.data));

        this.setState({
            emp_Name: '',
            emp_phone: '',
            emp_email: '',
            emp_dob: ''
        })
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.emp_Name}
                            onChange={this.onChangeEmpName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.emp_phone}
                            onChange={this.onChangeEmpPhone}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.emp_email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>DOB: </label>
                        {/* <Datetime inputProps={{ placeholder: 'N/A', disabled: true }} className="form-control"
                            value={this.state.emp_dob}
                            onChange={this.onChangeDOB}></Datetime> */}
                        <input
                            type="date"
                            className="form-control"
                            value={this.state.emp_dob}
                            onChange={this.onChangeDOB}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Employee" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}