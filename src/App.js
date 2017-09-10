import React, { Component } from 'react';
import './App.css'
import Navbar from './shared/Navbar';
import { Route, Switch } from 'react-router-dom'
import Events from './events/index'
import School from './school/index'
import Signup from './signup/index'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container-fluid">
          <Switch>
            <Route path="/events" component={Events}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/:school" component={School}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
