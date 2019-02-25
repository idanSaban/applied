import React, { Component } from 'react';
import { MdCancel } from "react-icons/md";

import '../../style/menu.css'
import Search from '../search/search';
class Menu extends Component {

    render() {
        return (
            <div id="menu" className={this.props.className}>
                <CloseButton toggleMenu={this.props.toggleMenu} />
                <Search />
                <MenuItem text='View Applications' />
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

const MenuItem = function ({ text, action }) {
    return (
        <div className='menu-item' onClick={action}>
            <span>
                {text}
            </span>
        </div>
    )
}
