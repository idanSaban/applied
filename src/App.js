import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/navBar';
import Applications from './components/applications/applications';

class App extends Component {
  constructor() {
    super()
    this.state = {
      applications: [
        { company: "google", position: "boss", link: "www.google.com", complete: false }]
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Applications data={this.state} />
      </div>
    );
  }
}

export default App;
