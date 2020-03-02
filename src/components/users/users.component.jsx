import React from 'react';
import './users.styles.scss';
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            age: '',
            address: '',
            employeeId: '',
            dob: '',
        };
    }
    handleChange = async e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        console.log(this.state);
    }
    handleSubmit = async e => {
        e.preventDefault();
        console.log("Current State : ", this.state);
        //save to state
        //empty this.state
        // this.state = {
        //     name: '',
        //     email: '',
        //     age: '',
        //     address: '',
        //     employeeId: '',
        //     dob: '',
        // };
    }
    render() {
        return (
            <div className="userContainer">
                <h1 className="title">Enter User Details</h1>
                <form className="userForm" onSubmit={this.handleSubmit}>
                    <div className="formElement">
                        <label className="form-label">Name :  </label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div className="formElement">
                        <label className="form-label">Email :  </label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="formElement">
                        <label className="form-label">Age :  </label>
                        <input type="number" name="age" value={this.state.age} onChange={this.handleChange}/>
                    </div>
                    <div className="formElement">
                        <label className="form-label">Address :  </label>
                        <textarea type="text" name="address" value={this.state.address} onChange={this.handleChange}/>
                    </div>
                    <div className="formElement">
                        <label className="form-label">EmployeeID :  </label>
                        <input type="text" name="employeeId" value={this.state.employeeId} onChange={this.handleChange}/>
                    </div>
                    <div className="formElement">
                        <label className="form-label">Date Of Birth :  </label>
                        <input type="date" name="dob" value={this.state.dob} onChange={this.handleChange}/>
                    </div>
                    <div className="submitButton">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default User;
