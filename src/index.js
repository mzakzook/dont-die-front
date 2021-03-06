import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import 'typeface-roboto';
import DiscoverPage from './components/DiscoverPage/DiscoverPage';
import Login from './components/Login'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import App from './App'




// ReactDOM.render((
//     <Router>
//       <Route exact path="/login" component={Login} />
//       <Route exact path="/discover" component={DiscoverPage} />
//     </Router>),
//     document.getElementById('root')
// );

ReactDOM.render(<BrowserRouter>
  <App />
</BrowserRouter>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
