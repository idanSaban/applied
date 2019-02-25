import React, { Component } from 'react';
import { FiMenu } from "react-icons/fi";
import '../../style/appBar.css'

const MenuButton = function () {
    return (
        <span id="menu-button">
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

class AppBar extends Component {
    render() {

        return (
            <div id="navbar">
                <Logo />
                <MenuButton />
            </div>
        )
    }
}

export default AppBar