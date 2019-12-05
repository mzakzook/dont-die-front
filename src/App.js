import React from 'react';
import logo from './logo.svg';
import api from './services/api';
import Login from './Login';
import DiscoverPage from './components/DiscoverPage/DiscoverPage'
import './App.css';

class App extends React.Component {
  state = { auth: { currentUser: {} } };

  componentDidMount() {
    console.log('CDM in APP');
    const token = localStorage.getItem('token');
    if (token) {
      api.auth.getCurrentUser().then(user => {
        const currentUser = { currentUser: user };
        debugger
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

  render() {
    return (
      <div className="App">

        <div id="content" className="ui container">
          <Login handleLogin={this.handleLogin} />
          <DiscoverPage currentUser={this.state.auth.currentUser} />
        </div>
      </div>
    );
  }

}

export default App;
