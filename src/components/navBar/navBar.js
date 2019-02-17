import React, { Component } from 'react';
import '../../style/navbar.css'
import { MdMenu } from "react-icons/md";
import Search from './search';

const Menu = function () {
    return (
        <div id="menu-button-container">
            <span id="menu-button">
                <MdMenu />
            </span>

        </div>
    )
}

class NavBar extends Component {
    render() {

        return (

            <div id="navbar">
                <Menu />


                <div id="logo">applied</div>

                <Search />
            </div>
        )
    }
}

export default NavBar