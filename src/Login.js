import React from 'react';
import api from './services/api';
import './Login.css'
 
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
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
    e.preventDefault();
    api.auth
      .login(this.state.fields.username, this.state.fields.password)
      .then(res => {
        // debugger
        if (res.error) {
          this.setState({ error: true });
        } else {
          this.props.handleLogin(res);
          // this.props.history.push('/');
        }
      });
  };

  render() {
    const { fields } = this.state;
    return (
      <div className='signInWrapper'>
        <div className='signInForm'>
          {this.state.error ? <h1>Try Again</h1> : null}
          <div className="ui form">
            <h2>SIGN IN</h2>
            <form onSubmit={this.handleSubmit}>
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
              Or sign in with<br/>
              <div>SOCIAL MEDIA ICON IN THIS DIV</div>
              <div>ANOTHER SOCIAL FOR LOGIN ICON DIV</div>
              <button type="submit" className="ui basic green button">
                SIGN IN
              </button>
            </form>
          </div>
        </div>
        <div>SOMETHING NEXT TO THE FORMS & STUFF</div>
      </div> 
    );
  }
}

export default Login;