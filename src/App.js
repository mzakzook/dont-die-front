import React from 'react';
import api from './services/api';
import Login from './Login';
import './App.css';
import NavBar from './NavBar'
import NewUser from './NewUser'
import Landing from './Landing'
import HeaderImg from './HeaderImg'

class App extends React.Component {
  state = { 
    auth: { 
      currentUser: {} 
    },
    navButtons: true
  };

  componentDidMount() {
    // console.log('CDM in APP');
    const token = localStorage.getItem('token');
    if (token) {
      api.auth.getCurrentUser().then(user => {
        const currentUser = { currentUser: user };
        this.setState({ auth: currentUser });
      });
    }
  }

 
  handleLogin = user => {
    const currentUser = { currentUser: user };
    localStorage.setItem('token', user.token);
    this.setState({ auth: currentUser });
  };

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ auth: { currentUser: {} } });
  };

  //passed as props to NavBar
  navButtonClick = (e) => {
    this.setState({navButtons: e.target.id})
  }

  drawInput = () => {
    if (this.state.navButtons === 'signin') {
      return <Login handleLogin={this.handleLogin} />
    } else if (this.state.navButtons === 'signup') {
      return <NewUser handleLogin={this.handleLogin} />
    } else {
      return ( 
        <div>
          <HeaderImg />
          <Landing />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <div className='App-header'>
          <NavBar navButtonClick={this.navButtonClick} />
        </div>
        <div id="content" className="ui container">
          {/* THIS IS WHERE THE LOGIN OR SIGNUP GOES */}
          {this.drawInput()}
        </div>
      </div>
    );
  }

}
export default App;