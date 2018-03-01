import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path="/" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      </div>
    );
  }
}

export default App;
