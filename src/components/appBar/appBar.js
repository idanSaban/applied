import React, { Component } from 'react';
import '../../style/appBar.css'
import MenuButton from './menuButton';
import Logo from '../logo';

class AppBar extends Component {
    render() {
        return (
            <div id="navbar">
                <MenuButton toggleMenu={this.props.toggleMenu} />
                <Logo />
            </div>
        )
    }
}

export default AppBar




