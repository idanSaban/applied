import React, { Component } from 'react';
import { FiMenu } from "react-icons/fi";
import '../../style/appBar.css'

class AppBar extends Component {
    render() {
        return (
            <div id="navbar">
                <Logo />
                <MenuButton toggleMenu={this.props.toggleMenu} />
            </div>
        )
    }
}

export default AppBar


const MenuButton = function ({ toggleMenu }) {
    return (
        <span id="menu-button" onClick={toggleMenu}>
            <FiMenu />
        </span>
    )
}

const Logo = function () {
    return (
        <span id="logo">
            Applied
        </span>
    )
}
