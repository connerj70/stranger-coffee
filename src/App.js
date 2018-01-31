import React, { Component } from 'react';
import "./reset.css";
import './App.css';
import Home from './views/Home/Home';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Home />
      </div>
    );
  }
}

export default App;
