import React, { Component } from 'react';
import 'App.css';
import logo from './logo.svg';
import Navbar from './shared/Navbar';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="jumbotron">
            <div className="text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React!</h2>
            </div>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
