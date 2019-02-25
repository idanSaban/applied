import React, { Component } from 'react';
import { MdCancel } from "react-icons/md";

import '../../style/menu.css'
import Search from '../search/search';
import Logo from '../logo';
class Menu extends Component {

    render() {
        return (
            <div id="menu" className={this.props.className}>
                <div id='menu-top-container'>
                    <Logo />
                    <CloseButton toggleMenu={this.props.toggleMenu} />
                </div>
                <Search />
                <MenuItem isCurrentPage={true} text='View Applications' />
                <MenuItem text='New Application' />
                <MenuItem text='Settings' />
            </div>
        )
    }
}

export default Menu

const CloseButton = function ({ toggleMenu }) {
    return (
        <div id="close-button">
            <span onClick={toggleMenu}>
                <MdCancel />
            </span>
        </div>
    )
}

const MenuItem = function ({ text, action, isCurrentPage }) {

    return (
        <div className={isCurrentPage ? `menu-item current-page` : `menu-item`}
            onClick={action}>
            {text}
        </div>
    )
}
