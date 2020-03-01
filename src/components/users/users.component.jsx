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
    }
    handleSubmit = async e => {
        e.preventDefault();
        //save to state
        //empty this.state
    }
    render() {
        return (
            <div className="userContainer">Hello from User Component</div>
        );
    }
}

export default User;
