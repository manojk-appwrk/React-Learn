import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const Employee = props => (
    <tr>
        <td >{props.employee.emp_Name}</td>
        <td >{props.employee.emp_phone}</td>
        <td >{props.employee.emp_email}</td>
        <td >{props.employee.emp_dob}</td>
        <td>
            <Link to={"/edit/"+props.employee._id}>Edit</Link>
        </td>
    </tr>
)

export default class EmployeeList extends Component {
    constructor(props)
    {
        super(props);
        this.state={employees:[]};
    }
    componentDidMount(){
        axios.get('http://localhost:4000/employees/')
        .then(response=>{
            this.setState({employees:response.data});
        })
        .catch(function(error){
            console.log(error);
        });
    }
    empList() {
        return this.state.employees.map(function(currentEmployee, i){
            return <Employee employee={currentEmployee} key={i} />;
        })
    }
    render() {
        return (
            <div>
                <h3>Employee List</h3> <span style={{ float: "right" }}><Link to="/addemployee" className="nav-link">Add Employee</Link></span>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.empList() }
                    </tbody>
                </table>
            </div>
        )
    }
}