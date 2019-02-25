import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from './components/appBar/appBar';
import Applications from './components/applications/applications';
import Menu from './components/menu/Menu';

class App extends Component {
  constructor() {
    super()
    this.state = {
      applications: [
        // { company: "some company", position: "web developer", link: "www.linkdin.com/jobs/123456", complete: false }
      ],
      displayMenu: false
    }
  }

  toggleMenu = async () => {
    const displayMenu = !this.state.displayMenu
    this.setState({ displayMenu })
  }

  render() {
    return (
      <div className="App">
        <AppBar toggleMenu={this.toggleMenu} />
        <Applications data={this.state} />
        {<Menu className={this.state.displayMenu ? 'showMenu' : 'hideMenu'} toggleMenu={this.toggleMenu} />}
      </div>
    );
  }
}

export default App;
