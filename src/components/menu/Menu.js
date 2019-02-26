import React, { Component } from 'react';
import { MdCancel, MdHome, MdSettings, MdLibraryAdd, } from "react-icons/md";

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
                <MenuItem icon={<MdHome />} isCurrentPage={true} text='View Applications' />
                <MenuItem icon={<MdLibraryAdd />} text='New Application' />
                <MenuItem icon={<MdSettings />} text='Settings' />
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

const MenuItem = function ({ icon, text, action, isCurrentPage }) {

    return (
        <div className={isCurrentPage ? `menu-item current-page` : `menu-item`}
            onClick={action}>
            {icon}            {text}
        </div>
    )
}
