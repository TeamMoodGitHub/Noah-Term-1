import React, { Component } from 'react';
import 'App.css';
import logo from './logo.svg';
import Navbar from './shared/Navbar';
import { Route, Switch } from 'react-router-dom'
import Login from './login/index'
import Events from './events/index'
import Subscribe from './subscribe/index'
import Signup from './signup/index'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        Hi
        <div className="container">
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/events" component={Events}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/subscribe" component={Subscribe}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
