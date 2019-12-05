import React, {Fragment} from 'react';
import logo from './logo.svg';
import api from './services/api';
import Login from './components/Login';
import './App.css';
import MyPlants from './containers/MyPlants';
import { Route, Switch, withRouter } from 'react-router-dom';


class App extends React.Component {
  state = { 
    auth: { currentUser: {} },
    plants: []
  };
  
 
  
  fetchPlants = () => {
    
    fetch(`http://localhost:3001/api/v1/plants?my_plants=${this.state.auth.currentUser.user.id}`)
    .then(res => res.json())
    .then(plants => {
        this.setState({
          plants: plants.data
        })
    })
  }

  componentDidMount() {
    console.log('CDM in APP');
    const token = localStorage.getItem('token');
    if (token) {
      api.auth.getCurrentUser().then(user => {
        const currentUser = { currentUser: user };
        
        this.setState({ auth: currentUser }, () => {
          this.fetchPlants()
        });
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

    const { plants } = this.state

    return (
   
        <Switch>
            <Route
              path="/login"
              render={routerProps => {
                return (
                  <Login {...routerProps} handleLogin={this.handleLogin} />
                );
              }}
            />
            <Route path="/my-plants" render={routerProps => {
              // after return on line 76? (this.state.plants.length === 0) ? (<div>Loading...</div>) : 
              return (
                <Fragment>
                <MyPlants {...routerProps} currentUser={this.state.auth.currentUser} plants={plants} fetchPlants={this.fetchPlants} />
                </Fragment>
              );
            }}
            />
            
          </Switch>
   


    );
  }

}

export default App;


