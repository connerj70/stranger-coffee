import React, { Component } from 'react';
import "./reset.css";
import './App.css';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import EditProfile from './views/EditProfile/EditProfile';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path='/editprofile' component={EditProfile} />
        </Switch>
      </div>
    );
  }
}

export default App;
