import React from 'react';
import api from './services/api';
import './NewUser.css';
import sidepic from './pics/SignUp_LeftAlignedImg.png'
import googleIcon from './pics/Google_Logo.png'
import fbIcon from './pics/FB_Logo.png'

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
      .then(res => {
        // debugger
        if (res.error) {
          this.setState({ error: true });
        } else {
          
          const {id, name, username} = res.user.data.attributes
          const newUser = {user: {id, name, username}, token: res.token }
          this.props.handleLogin(newUser);
          this.props.history.push('/discover');
        }
      });

  };

  render() {
    const { fields } = this.state;
    return (
        <div className='signUpWrapper'>
            <div className='imgBox'>
              <img className='left-fit'src={sidepic} alt='' />
            </div>
            
            <div>
                
                <h2>SIGN UP</h2>
                {this.state.error ? <h1>Try Again</h1> : null}
                <div className="ui form">
                <form onSubmit={this.handleSubmit}>

                    <div className="ui field">
                    <label>Full Name</label><br/>
                    <input
                        name="name"
                        value={fields.fullname}
                        onChange={this.handleChange}
                    />
                    </div>

                    <div className="ui field">
                    <label>Username</label><br/>
                    <input
                        name="username"
                        value={fields.username}
                        onChange={this.handleChange}
                    />
                    </div>
                    <div className="ui field">
                    <label>Password</label><br/>
                    <input
                        name="password"
                        type="password"
                        value={fields.password}
                        onChange={this.handleChange}
                    />
                    </div>
                  
                    Or sign in with<br/>
                    <div>
                      <img className='loginIcon' src={googleIcon} alt='' />
                      <img className='loginIcon' src={fbIcon} alt='' />
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