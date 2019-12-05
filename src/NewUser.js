import React from 'react';
import api from './services/api';
import './NewUser.css';
 
class NewUser extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        name: '',
        username: '',
        password: ''
      }
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    const { name, username, password } = this.state.fields
    e.preventDefault();
    api.auth
      .create(name, username, password)

  };

  render() {
    const { fields } = this.state;
    return (
        <div className='signUpWrapper'>
            <div>SOMETHING NEXT TO THE FORMS OR SOMETHING</div>
            <div>
                <h2>SIGN UP</h2>
                {this.state.error ? <h1>Try Again</h1> : null}
                <div className="ui form">
                <form onSubmit={this.handleSubmit}>

                    <div className="ui field">
                    <label>Full Name</label><br/>
                    <input
                        name="name"
                        placeholder="Full Name"
                        value={fields.fullname}
                        onChange={this.handleChange}
                    />
                    </div>

                    <div className="ui field">
                    <label>Username</label><br/>
                    <input
                        name="username"
                        placeholder="username"
                        value={fields.username}
                        onChange={this.handleChange}
                    />
                    </div>
                    <div className="ui field">
                    <label>Password</label><br/>
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        value={fields.password}
                        onChange={this.handleChange}
                    />
                    </div>

                    <button type="submit" className="ui basic green button">
                    Sign Up
                    </button>
                </form>
                </div>
            </div>
        </div>
    );
  }
}

export default NewUser;