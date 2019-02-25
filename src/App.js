import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from './components/appBar/appBar';
import Applications from './components/applications/applications';

class App extends Component {
  constructor() {
    super()
    this.state = {
      applications: [
        { company: "some company", position: "web developer", link: "www.linkdin.com/jobs/123456", complete: false }]
    }
  }
  render() {
    return (
      <div className="App">
        <AppBar />
        <Applications data={this.state} />
      </div>
    );
  }
}

export default App;
